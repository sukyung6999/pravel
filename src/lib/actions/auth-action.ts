'use server';

import { login } from '@/services/api/auth.api';
import { LoginForm } from '@/types/auth.type';

import { createAuthSession } from '../auth';

export interface LoginActionProps {
  redirect: boolean;
  error: boolean;
}

const loginAction = async (_: LoginActionProps, form: LoginForm) => {
  const props: LoginActionProps = {
    redirect: false,
    error: false,
  };

  try {
    const response = await login(form);

    createAuthSession(response.user, response.token);
    props.redirect = true;
    return props;
  } catch (e) {
    if ((e as { code: number })?.code === 400) {
      props.error = true;
      return props;
    }

    throw new Error('문제가 발생하였습니다.');
  }
};

export default loginAction;
