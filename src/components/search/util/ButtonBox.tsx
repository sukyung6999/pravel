import { memo } from 'react';

import Button from '@/components/button/Button';

import WishBtn from './WishBtn';

interface ButtonBoxProps {
  category: string;
  contentId: string;
  like: boolean;
  onAddLocation: () => void;
}

const ButtonBox = ({
  category,
  contentId,
  like,
  onAddLocation,
}: ButtonBoxProps) => {
  return (
    <div className="z-10 fixed left-[50%] bottom-0 flex w-full max-w-[790px] min-w-[390px] px-[16px] py-[20px] border-t-[1px] border-gray-200 translate-x-[-50%] box-border bg-white">
      <WishBtn
        category={category}
        contentId={contentId}
        like={like}
        size={40}
      />
      <Button
        onClick={onAddLocation}
        className="rounded-[12px] text-[16px] w-[calc(100%-62px)] h-[52px]"
      >
        장소 추가
      </Button>
    </div>
  );
};

export default memo(ButtonBox);
