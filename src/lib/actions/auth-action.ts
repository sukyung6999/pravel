'use server';

import { redirect } from 'next/navigation';

import { login } from '@/services/api/auth.api';
import { LoginForm } from '@/types/auth.type';

import { createAuthSession, destroySession } from '../auth';

export interface LoginActionProps {
  redirect: boolean;
  error: boolean;
}

export const loginAction = async (_: LoginActionProps, form: LoginForm) => {
  const props: LoginActionProps = {
    redirect: false,
    error: false,
  };

  try {
    const response = await login(form);

    await createAuthSession(response.user, response.token);
  } catch (e) {
    if ((e as { code: number })?.code === 400) {
      props.error = true;
      return props;
    }

    throw new Error('문제가 발생하였습니다.');
  }

  return redirect('/');
};

export const logoutAction = async () => {
  await destroySession();
  redirect('/login');
};
