import Image from 'next/image';
import Link from 'next/link';

const FullEnergy = () => (
  <div className="relative w-44 h-44 bg-white z-10 shadow-md flex flex-col items-center justify-center">
    <Link href="/mypage/reward-slot">
      <Image
        className="mt-[-20px]"
        src="/mypage/reward.png"
        width={135.83}
        height={139.48}
        alt="reward"
      />
    </Link>
  </div>
);

export default FullEnergy;
