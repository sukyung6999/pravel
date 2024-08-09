import Image from 'next/image';

const ScheduleItem = () => {
  return (
    <div className="">
      <div className="inline-block rounded-[30px_30px_30px_10px] overflow-hidden">
        <Image
          src="/test.jpg"
          alt="test"
          width={100}
          height={100}
          sizes="100px"
        />
        <button>일정 삭제하기</button>
      </div>
      <div>
        <span>출발</span>
        <strong>제주공항</strong>
        <p>김포공항-제주공항</p>
        <button>리뷰쓰기</button>
      </div>
    </div>
  );
};

export default ScheduleItem;
