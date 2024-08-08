import Image from 'next/image';

import LikeImg from '@/components/svg/ico_like.svg';

const UtilBox = () => {
  return (
    <div className="z-10 fixed left-[50%] bottom-0 w-full max-w-[790px] min-w-[390px] px-[16px] py-[20px] border-t-[1px] border-gray-200 translate-x-[-50%] box-border bg-white">
      <button type="button" className="inline-block mr-[16px] align-middle">
        <LikeImg width={46} height={46} alt="위시리스트" />
      </button>
      <button
        type="button"
        className="w-[calc(100%-62px)] h-[52px] text-white font-bold text-[16px] text-center bg-primary rounded-[12px]"
      >
        장소 추가
      </button>
    </div>
  );
};

export default UtilBox;
