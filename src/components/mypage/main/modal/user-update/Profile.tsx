import { useRef, useState } from 'react';
import Image, { ImageLoader } from 'next/image';

export const DEFAULT_PROFILE = '/mypage/default-profile.png';

export const profileLoader: ImageLoader = ({ src, width, quality }) => {
  if (src === DEFAULT_PROFILE) return DEFAULT_PROFILE;
  return `${process.env.NEXT_PUBLIC_DEV_BASE_URL}/profile/${src}?w=${width}&q=${quality || 75}`;
};

interface ProfileProps {
  image?: string;
}

const Profile = ({ image }: ProfileProps) => {
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProfileImg(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProfileImg(null);
  };

  return (
    <div className="relative w-[126px] h-[126px] mx-auto cursor-pointer">
      <div
        className="relative w-full h-full"
        onClick={() => inputRef.current?.click()}
      >
        {profileImg ? (
          <>
            <div className="relative w-full h-full overflow-hidden rounded-full">
              <Image
                className="object-contain"
                src={profileImg}
                alt="profile preview"
                fill
              />
            </div>
            <div
              className="absolute right-0 top-0 p-1 bg-gray-300 rounded-full"
              onClick={handleCancel}
            >
              <i className="ico_pravel ico_close24_wh z-10" />
            </div>
          </>
        ) : (
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image
              className="object-contain"
              loader={profileLoader}
              src={image || DEFAULT_PROFILE}
              alt="profile"
              fill
              priority
            />
          </div>
        )}
      </div>
      <i className="absolute -bottom-[2px] right-[7px] ico_pravel ico_profile_update24" />
      <input
        ref={inputRef}
        className="hidden"
        name="profile"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default Profile;
