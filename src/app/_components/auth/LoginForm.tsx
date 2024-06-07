'use client';

import { useCallback } from "react";
import { useRouter } from 'next/navigation';

import InputForm from "@/app/_components/form/InputForm";
import ControlInput from "@/app/_components/auth/ControlInput";

import { LoginForm as LoginFormType } from "@/app/_types/auth.type";
import AuthFormItem from "./AuthFormItem";
import { useLogin } from "@/app/_hook/useAuth";
import Button from "../button/Button";


enum PLACEHOLDER {
  email = '아이디를 입력해주세요.',
  password = '비밀번호를 입력해주세요.',
};

const ERROR_MESSAGE = {
  required: {
    email: PLACEHOLDER.email,
    password: PLACEHOLDER.password,
  },
  empty: '공백은 입력할 수 없습니다.',
  reg: {
    email: '이메일 형식이 올바르지 않습니다.',
    password: '영문, 숫자, 특수문자 1개 이상을 포함한 8자 이상',
  }
}

const data: LoginFormType = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const login = useLogin();  

  const onSubmit = useCallback((
    form: LoginFormType, 
  ) => {
    try {
      login.mutateAsync(form);
      useRouter().push('/');
    } catch {}
  }, []);

  return (
    <InputForm
      data={data}
      buttons={(
        <>
          <Button type="submit">로그인</Button>
          <Button type="button" fill="#111" color="#fff" border={false}>회원가입</Button>
        </>
      )}
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

                  if (!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g.test(value)) {
                    return ERROR_MESSAGE.reg.email;
                  }
                }
              }}
            />
          </AuthFormItem>
          <AuthFormItem control={control} name="password">
            <ControlInput 
              name="password" 
              control={control} 
              placeholder={PLACEHOLDER.password} 
              type="password"
              rules={{
                validate: (value) => {
                  if (!value.trim()) {
                    return ERROR_MESSAGE.required.password;  
                  }

                  if (!/^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g.test(value)) {
                    return ERROR_MESSAGE.reg.password;
                  }
                }
              }}
            />
          </AuthFormItem>
        </>
      )}
      onSubmit={onSubmit}
    />
  )
};

export default LoginForm;
