'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import InputForm from '@/components/form/InputForm';
import ControlInput from '@/components/auth/ControlInput';

import { LoginForm as LoginFormType } from '@/types/auth.type';
import AuthFormItem from './AuthFormItem';
import { useLogin } from '@/hook/useAuth';
import Button from '../button/Button';
import PasswordInput from './input/PasswordInput';
import { ERROR_MESSAGE, PLACEHOLDER } from '@/lib/const/auth-message';

const data: LoginFormType = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const login = useLogin();

  const onSubmit = useCallback(async (form: LoginFormType) => {
    try {
      await login.mutateAsync(form);
      useRouter().push('/');
    } catch {}
  }, []);

  return (
    <InputForm
      data={data}
      buttons={
        <>
          <Button type="submit">로그인</Button>
          <Button type="button" fill="#111" color="#fff" border={false}>
            회원가입
          </Button>
        </>
      }
      render={(control) => (
        <>
          <AuthFormItem control={control} name="email">
            <ControlInput
              name="email"
              control={control}
              placeholder={PLACEHOLDER.email}
              rules={{
                validate: (value) => {
                  if (!value.trim()) {
                    return ERROR_MESSAGE.required.email;
                  }

                  if (value.includes(' ')) {
                    return ERROR_MESSAGE.empty;
                  }

                  if (
                    !/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g.test(
                      value,
                    )
                  ) {
                    return ERROR_MESSAGE.reg.email;
                  }
                },
              }}
            />
          </AuthFormItem>
          <PasswordInput control={control} name="password" />
        </>
      )}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
