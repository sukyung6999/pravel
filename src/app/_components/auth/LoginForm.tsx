'use client';

import InputForm from "@/app/_components/form/InputForm";
import ControlInput from "@/app/_components/auth/ControlInput";

import { LoginForm as LoginFormType } from "@/app/_types/auth.type";
import { useCallback } from "react";
import AuthFormItem from "./AuthFormItem";
import { UseFormSetError } from "react-hook-form";

enum PLACEHOLDER {
  email = '아이디를 입력해주세요.',
  password = '비밀번호를 입력해주세요.',
};

// TODO
// 에러 메시지 작성
enum ERROR_MESSAGE {

}

const LoginForm = () => {
  const data: LoginFormType = {
    email: '',
    password: '',
  };

  // TODO
  // 벨리데이션 체크 및 로그인 요청 처리
  const onSubmit = useCallback((
    data: LoginFormType, 
    setError: UseFormSetError<LoginFormType>
  ) => {
    
  }, []);

  return (
    <InputForm
      data={data}
      buttons={<button type="submit">로그인</button>}
      render={(control) => (
        <>
          <AuthFormItem control={control} name="email">
            <ControlInput 
              name="email" 
              control={control} 
              rules={{
                required: '아이디를 입력해주세요.',
              }}
              placeholder={PLACEHOLDER.email}
            />
          </AuthFormItem>
          <AuthFormItem control={control} name="password">
            <ControlInput 
              name="password" 
              control={control} 
              placeholder={PLACEHOLDER.password} 
              type="password"
            />
          </AuthFormItem>
        </>
      )}
      onSubmit={onSubmit}
    />
  )
};

export default LoginForm;
