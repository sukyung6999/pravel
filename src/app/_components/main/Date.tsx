const Date = () => {
  // 오늘 날짜로 바로 보여지도록 설정하기
  return (
    <section className="relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[53px] before:bg-primary">
      <div className="mx-[16px] overflow-hidden rounded-[12px] relative shadow-[0_4px_10px_0px_rgba(204,231,223,0.4)] before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#ffffffef] before:backdrop-blur-[20.7px] before:border-[1px] before:border-[#fff] before:rounded-[12px]">
        <div
          className={`w-full h-full py-[20px] relative z-[2] flex item-center justify-center text-center`}
        >
          <h2 className="relative z-10">
            <strong className="block font-semibold text-primary">Day1</strong>
            <span className="text-[20px] font-semibold">5월 4일 토요일</span>
          </h2>
          <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-[20px]">
            <button className="ico_pravel ico_prev32">이전 날짜</button>
            <button className="ico_pravel ico_next32">다음 날짜</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Date;
