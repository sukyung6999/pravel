import Link from 'next/link';

const HeaderManage = () => {
  return (
    <header className="flex justify-between items-center bg-primary p-[16px]">
      <h1 className="text-[18px] font-semibold text-white">여행 관리</h1>
      <div className="flex gap-[16px] items-center">
        <Link
          href="/onboarding"
          className="ico_pravel_before relative flex items-center gap-[6px] h-[32px] px-[10px] rounded-2xl  text-primary text-[14px] text-bold bg-white before:inline-block before:w-[16px] before:h-[16px] before:bg-[-72px_-78px] "
        >
          새로운 여행
        </Link>
        <Link href="/" className="ico_pravel ico_close24_wh">
          닫기
        </Link>
      </div>
    </header>
  );
};

export default HeaderManage;
