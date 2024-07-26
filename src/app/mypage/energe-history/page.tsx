import History from '@/components/mypage/energe/History';

const EnergeHistory = () => {
  return (
    <dialog
      className="w-full h-[90%] block backdrop:bg-black/50 backdrop:backdrop-blur-md"
      open
    >
      <header className="flex justify-between height-[24px] px-[16px] py-[20px] leading-[24px]">
        <button type="button" className="ico_pravel ico_prev24">
          이전 페이지
        </button>
        <h2 className="font-medium">에너지 히스토리</h2>
        <button type="button" className="ico_pravel ico_close24">
          닫기
        </button>
      </header>
      <History title="현재 에너지" />
      <div className="h-[9px] bg-gray-100 mt-10"></div>
      <History title="과거 에너지" />
    </dialog>
  );
};

export default EnergeHistory;
