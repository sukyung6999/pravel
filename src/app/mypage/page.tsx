import Image from 'next/image';

import Profile from '@/components/mypage/main/Profile';
import Reward from '@/components/mypage/main/Reward';
import TravelEnerge from '@/components/mypage/main/TravelEnerge';

const MypageMain = () => {
  const profile = {
    image: '/mypage/Ellipse 522.png',
    level: 6,
    name: '김여행',
  };

  return (
    <div className="bg-gray-100 h-dvh px-4 pt-10">
      <div className="flex justify-between">
        <Profile {...profile} />
        <div className="flex items-center">
          <button className=" rounded-full bg-gray-400 w-8 h-8 flex justify-center items-center">
            <Image src="/icon_set.png" width={26} height={26} alt="setting" />
          </button>
        </div>
      </div>

      <TravelEnerge />
      <Reward />
    </div>
  );
};

export default MypageMain;
