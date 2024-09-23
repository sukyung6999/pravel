import Image from 'next/image';

import LoginForm from '@/components/auth/LoginForm';

const Login = () => (
  <div className="login h-dvh flex justify-center">
    <div className="flex flex-col text-center flex-1">
      <h1 className="py-[22.5px] border-b mb-[40px] border-b-gray-200 font-semibold text-gray-900">
        로그인
      </h1>
      <div className="px-[16px] mb-[40px]">
        <Image src="/auth/logo.png" alt="login" width={32} height={32} />
        <div className="text-left mt-[10px] text-gray-900 text-[14px] font-medium">
          로그인 정보를 입력해주세요.
        </div>
      </div>
      <LoginForm />
    </div>
  </div>
);

export default Login;
