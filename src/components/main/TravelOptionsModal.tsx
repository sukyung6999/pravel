import Link from 'next/link';

const TravelOptionsModal = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full pt-[49px] pb-[34px]">
      <button>하단으로 모달창 내리기</button>
      <div>
        <Link href="/">AI 프레블러 코스 추천</Link>

        <div>
          <button>
            <span>
              New
              <span>3</span>
            </span>
            <span>나의 위시리스트</span>
          </button>

          <Link href="/">장소 탐색하기</Link>
        </div>
      </div>
    </div>
  );
};

export default TravelOptionsModal;
