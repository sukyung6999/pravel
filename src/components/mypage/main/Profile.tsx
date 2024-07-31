import Image from 'next/image';

interface ProfileProps {
  image: string;
  level: number;
  name: string;
}

const Profile = ({ image, level, name }: ProfileProps) => {
  return (
    <div className="flex gap-[14px] items-center">
      <div className="thumnail w-[46px] h-[46px] relative">
        <Image src={image} alt="profile" fill />
      </div>
      <div className="info font-bold">
        <div className="text-primary">Lv.{level}</div>
        <div className="flex gap-2">
          <span className="text-[22px]">{name}</span>
          <span className="text-[16px] leading-[22px] text-gray-600 flex items-end">
            님의 에너지
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
