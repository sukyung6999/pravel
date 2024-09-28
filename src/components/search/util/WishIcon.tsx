import WishImg from '@/components/svg/ico_wish.svg';
import WishedImg from '@/components/svg/ico_wish_on.svg';

interface WishIconProps {
  like: boolean;
  size: number;
  alt: string;
}

const WishIcon = ({ like, size, alt }: WishIconProps) => {
  return like ? (
    <WishedImg width={size} height={size} alt={alt} />
  ) : (
    <WishImg width={size} height={size} alt={alt} />
  );
};

export default WishIcon;
