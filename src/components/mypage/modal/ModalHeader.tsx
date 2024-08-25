'use client';

import { useRouter } from 'next/navigation';

interface Props {
  title: string;
}

const ModalHeader = ({ title }: Props) => {
  const router = useRouter();

  return (
    <header className="flex justify-between height-[24px] px-[16px] py-[20px] leading-[24px]">
      <button type="button" className="invisible">
        이전 페이지
      </button>
      <h2 className="font-medium">{title}</h2>
      <button
        type="button"
        className="ico_pravel ico_close24"
        onClick={router.back}
      >
        닫기
      </button>
    </header>
  );
};

export default ModalHeader;
