import Link from 'next/link';

import { logoutAction } from '@/lib/actions/auth-action';

interface UserInfoProps {
  userId: string;
}

const UserInfo = ({ userId }: UserInfoProps) => {
  return (
    <div className="mt-10 pb-32">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-gray-600">로그인/정보</h1>
      </div>
      <div className="mt-[10px] p-5 bg-white rounded-xl">
        <div className="flex justify-between">
          <span className="text-gray-700 font-semibold">{userId}</span>
          <form action={logoutAction}>
            <button
              type="submit"
              className="w-[86px] h-[29px] text-primary text-[14px] font-semibold rounded-full border-primary border-2"
            >
              로그아웃
            </button>
          </form>
        </div>
        <div className="border-gray-200 border-[1px] mt-5"></div>
        <Link
          className="py-[15px] flex items-center justify-between text-[14px] tracking-tighter font-semibold text-gray-600"
          href="/mypage/update"
        >
          프로필 / 닉네임 수정
          <i className="ico_pravel ico_right_gray_arrow24" />
        </Link>
        <Link
          className="pt-[15px] flex items-center justify-between text-[14px] tracking-tighter font-semibold text-gray-600"
          href="/mypage/password-change"
        >
          비밀번호 수정
          <i className="ico_pravel ico_right_gray_arrow24" />
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
