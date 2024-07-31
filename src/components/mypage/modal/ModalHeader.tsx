'use client';

interface Props {
  title: string;
  onClose: () => void;
}

const ModalHeader = ({ title, onClose }: Props) => {
  return (
    <header className="flex justify-between height-[24px] px-[16px] py-[20px] leading-[24px]">
      <button type="button" className="ico_pravel ico_prev24">
        이전 페이지
      </button>
      <h2 className="font-medium">{title}</h2>
      <button
        type="button"
        className="ico_pravel ico_close24"
        onClick={onClose}
      >
        닫기
      </button>
    </header>
  );
};

export default ModalHeader;
