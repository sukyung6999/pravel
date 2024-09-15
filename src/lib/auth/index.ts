import { auth } from '@/auth';
import * as authApi from '@/services/api/auth.api';

export const verifyAuth = async () => {
  const session = await auth();

  if (!session?.user?.id) return null;

  try {
    return session;
  } catch (e) {
    return null;
  }
};

export const getToken = async () => {
  const session = await verifyAuth();

  if (!session?.user?.id) {
    throw new Error('No session');
  }

  return session.user.id || '';
};

export const getUser = async () => {
  const session = await verifyAuth();

  if (!session?.user?.id) {
    throw new Error('No session');
  }

  const user = await authApi.fetchUser();

  return {
    ...user,
    password: null,
  };
};

declare module 'next-auth' {
  interface Session {
    token?: string;
  }

  interface User {
    id?: string;
  }
}
