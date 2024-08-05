const UtilBox = () => {
  return (
    <div className="z-10 fixed left-[50%] bottom-0 w-full max-w-[790px] min-w-[390px] px-[16px] py-[20px] border-t-[1px] border-gray-200 translate-x-[-50%] box-border bg-white">
      <button
        type="button"
        className="bg-primary inline-block w-[40px] h-[40px] mr-[16px] align-middle"
      >
        <span className="screen_out">위시리스트 저장하기(아이콘 작업전)</span>
      </button>
      <button
        type="button"
        className="w-[calc(100%-90px)] h-[52px] text-white font-bold text-[16px] text-center bg-primary rounded-[12px]"
      >
        장소 추가
      </button>
    </div>
  );
};

export default UtilBox;
