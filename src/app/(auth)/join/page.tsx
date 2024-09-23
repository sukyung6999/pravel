import Image from 'next/image';

import JoinForm from '@/components/auth/JoinForm';

const Join = () => (
  <div className="join h-dvh flex justify-center">
    <div className="flex flex-col text-center flex-1">
      <h1 className="py-[22.5px] border-b mb-[40px] border-b-gray-200 font-semibold text-gray-900">
        회원가입
      </h1>
      <div className="px-4 mb-10">
        <Image src="/auth/logo.png" alt="login" width={32} height={32} />
        <div className="text-left mt-[10px] text-gray-900 text-[14px] font-medium">
          회원가입을 위해 필요한 정보를 입력해주세요.
        </div>
      </div>
      <JoinForm />
    </div>
  </div>
);

export default Join;
