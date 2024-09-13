'use server';

import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import { setToast } from '@/components/common/toaster/ToasterProvider';
import * as authApi from '@/services/api/auth.api';
import { LoginForm } from '@/types/auth.type';

import { createAuthSession, destroySession, getToken } from '../auth';
import { ERROR_MESSAGE } from '../const/auth-message';
import { validateNickname, validatePassword } from '../validate/auth-validate';

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
    const response = await authApi.login(form);

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

export const updateNicknameAction = async (_: string, form: FormData) => {
  const nickname = form.get('nickname')?.toString();
  const result = validateNickname(nickname);

  if (result !== true) return result;

  const token = await getToken();

  try {
    await authApi.updateNickname(nickname!, token);
  } catch (e) {
    if ((e as { code: number })?.code === 400) {
      return ERROR_MESSAGE.reg.nickname;
    }

    throw new Error('문제가 발생하였습니다.');
  }

  setToast({ type: 'success', message: '닉네임이 변경되었습니다.' });
  revalidateTag('auth');
  return redirect('/mypage');
};

interface PasswordError {
  current: string;
  new: string;
}

export const updatePasswordAction = async (
  error: PasswordError,
  form: FormData,
): Promise<PasswordError> => {
  const password = form.get('password')?.toString();
  const newPassword = form.get('new-password')?.toString();
  const token = await getToken();

  let result = validatePassword(password);

  if (result !== true) {
    return {
      ...error,
      current: result,
    };
  }

  const response = await authApi.checkPassword(password!, token);

  if (!response) {
    return {
      ...error,
      current: '비밀번호가 일치하지 않습니다.',
    };
  }

  result = validatePassword(newPassword);

  if (result !== true) {
    return {
      current: '',
      new: result,
    };
  }

  try {
    await authApi.updatePassword(newPassword!, token);
  } catch (e) {
    if ((e as { code: number })?.code === 400) {
      return {
        ...error,
        new: ERROR_MESSAGE.reg.nickname,
      };
    }

    throw new Error('문제가 발생하였습니다.');
  }

  setToast({ type: 'success', message: '비밀번호가 변경되었습니다.' });
  return redirect('/mypage');
};
