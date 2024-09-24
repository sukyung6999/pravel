import { useState } from 'react';

import { usePostWish } from '@/hook/useWish';

import WishIcon from './WishIcon';

interface WishBtnProps {
  category: string;
  contentId: string;
  like: boolean;
  size: number;
  refetch: () => void;
  pageNum: number;
}

const WishBtn = ({
  category,
  contentId,
  like,
  size,
  refetch,
  pageNum,
}: WishBtnProps) => {
  const postWish = usePostWish();
  const [isLiked, setIsLiked] = useState(like);
  const handleClickLike = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
    postWish.mutate({
      category,
      contentId,
    });
    console.log(pageNum);
    refetch({ refetchPage: (_, index) => index === pageNum / 10 });
  };

  return (
    <button type="button" className="mr-[16px]" onClick={handleClickLike}>
      <WishIcon
        like={isLiked}
        size={size}
        alt={isLiked ? '위시리스트에 추가됨' : '위시리스트에 추가하기'}
      />
    </button>
  );
};

export default WishBtn;
