import Image from 'next/image';

const TravelItem = () => {
  return (
    <>
      <div>
        <Image src="/test1.jpg" alt="test" width={40} height={40} />
      </div>
      <div>
        <p>
          제주 여행 <span>D+1</span>
        </p>
        <p>2024.05.03(Fri) - 05.06(Mon)</p>
      </div>
    </>
  );
};

export default TravelItem;
