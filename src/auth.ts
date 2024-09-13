import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import * as authApi from '@/services/api/auth.api';

import ApiError from './lib/error/ApiError';

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    session: async ({ session }) => {
      session.user.id = session.user.name || '';
      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const response = await authApi.login({
            email: credentials.email as string,
            password: credentials.password as string,
          });

          return {
            email: response.user.email,
            name: response.token,
          };
        } catch (e) {
          if ((e as { code: number })?.code === 400) {
            throw new ApiError(400, 'Invalid email or password');
          }

          throw e;
        }
      },
    }),
  ],
});
