interface FloatingBarProps {
  openAddOption: () => void;
}

const FloatingBar = ({ openAddOption }: FloatingBarProps) => {
  return (
    <div className="fixed top-0 max_min_width w-full h-full">
      <ul className="absolute right-[16px] bottom-[150px]">
        <li className="bg-white rounded-full shadow-[0_0_10px_0_#0000001A] mb-[8px]">
          <button className="ico_pravel ico_plus56" onClick={openAddOption}>
            여행계획 추가하기
          </button>
        </li>
        <li className="bg-white rounded-full shadow-[0_0_10px_0_#0000001A]">
          <button className="ico_pravel ico_map56">지도보기</button>
        </li>
      </ul>
    </div>
  );
};

export default FloatingBar;
