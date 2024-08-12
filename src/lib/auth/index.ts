import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
import { Cookie, Lucia, Session } from 'lucia';
import { cookies } from 'next/headers';

import { verifyUser } from '@/services/api/auth.api';
import { User } from '@/types/auth.type';

interface CustomSession extends Session {
  token: string;
}

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.tb_user);

const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
  getUserAttributes: (attributes) => {
    return {
      ...attributes,
    };
  },
  getSessionAttributes: (attributes) => {
    return {
      ...attributes,
    };
  },
});

const setCookie = (sessionCookie: Cookie) => {
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
};

export const createAuthSession = async (user: User, token: string) => {
  const session = await lucia.createSession(user.email, { token });
  const sessionCookie = lucia.createSessionCookie(session.id);

  setCookie(sessionCookie);
};

export const verifyAuth = async () => {
  const sessionCookie = cookies().get(lucia.sessionCookieName);

  if (!sessionCookie) {
    return {
      user: null,
      session: null,
    };
  }

  const sessionId = sessionCookie.value;

  if (!sessionId) {
    return {
      user: null,
      session: null,
    };
  }
  const result = await lucia.validateSession(sessionId);

  try {
    if (result.session && result.session.fresh) {
      await verifyUser((result.session as CustomSession).token);
      const newSessionCookie = lucia.createSessionCookie(sessionId);

      setCookie(newSessionCookie);
    }

    if (!result.session) {
      const blankSessionCookie = lucia.createBlankSessionCookie();

      setCookie(blankSessionCookie);
    }
  } catch (e) {
    if ((e as { code: number })?.code === 401 && result.session?.id) {
      lucia.invalidateSession(result.session?.id);
    }

    return result;
  }

  return result;
};

interface DatabaseUserAttributes {
  email: string;
}

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

export default lucia;
