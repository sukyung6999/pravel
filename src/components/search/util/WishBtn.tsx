import { usePostWish } from '@/hook/useWish';

import WishIcon from './WishIcon';

interface WishBtnProps {
  category: string;
  contentId: string;
  like: boolean;
  size: number;
}

const WishBtn = ({ category, contentId, like, size }: WishBtnProps) => {
  const postWish = usePostWish(category);
  const handleClickLike = () => {
    postWish.mutate({
      category,
      contentId,
    });
  };

  return (
    <button type="button" className="mr-[16px]" onClick={handleClickLike}>
      <WishIcon
        like={like}
        size={size}
        alt={like ? '위시리스트에 추가됨' : '위시리스트에 추가하기'}
      />
    </button>
  );
};

export default WishBtn;
