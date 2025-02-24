import ModalWrapper from '@/layout/wrapper/ModalWrapper';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface AddOptionProps {
  addOptionOpen: boolean;
  closeAddOption: () => void;
  openWishList: () => void;
}

const AddOption = ({
  addOptionOpen,
  closeAddOption,
  openWishList,
}: AddOptionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (addOptionOpen) {
      setIsVisible(true);
      return undefined;
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [addOptionOpen]);

  if (!isVisible) return null;
  return (
    <ModalWrapper>
      <div className="modal-content fixed bottom-0 left-0 origin-bottom-left w-full z-50  animate-modalUp">
        <div className="max_min_width pt-[10px] pb-[41px] relative left-1/2 -translate-x-1/2 bg-white rounded-[20px_20px_0_0] shadow-[0px_0px_20px_0px_#00000020]">
          <button
            onClick={closeAddOption}
            className="blind block w-full before:content-[''] before:block before:w-[64px] before:h-[4px] before:bg-gray-300 before:mb-[28px] before:mx-[auto]"
          >
            하단으로 모달창 내리기
          </button>
          <div>
            <div className="flex px-[40px] gap-[14px] items-stretch">
              <button
                onClick={openWishList}
                className="relative w-1/2 bg-gray-100 border border-gray-300 rounded-[20px] pt-[30px] pb-[24px]
              ico_pravel_before before:block
              before:w-[56px] before:h-[56px] before:bg-[-112px_-128px]  before:m-[0_auto]"
              >
                <p className="absolute w-full top-[10px] px-[12px] flex justify-between">
                  <span className="ico_pravel ico_new25 my-[8px]">New</span>
                  <span className="text-primary">3</span>
                </p>
                <span className="block pt-[19px]">나의 위시리스트</span>
              </button>
              <Link
                href="/search"
                className="w-1/2 bg-gray-100 border border-gray-300 rounded-[20px] pt-[30px] pb-[24px] ico_pravel_before before:block before:w-[56px] before:h-[56px] before:bg-[-168px_-128px] before:m-[0_auto]"
              >
                <span className="block pt-[19px] text-center">
                  장소 탐색하기
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default AddOption;
