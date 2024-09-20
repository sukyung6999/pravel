import ModalWrapper from '@/layout/wrapper/ModalWrapper';
import { useEffect, useState } from 'react';

interface ShareLinkProps {
  shareLinkOpen: boolean;
  setShareLinkOpen: (value: boolean) => void;
}
const ShareLink = ({ setShareLinkOpen, shareLinkOpen }: ShareLinkProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shareLinkOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [shareLinkOpen]);

  const handleClose = () => {
    setShareLinkOpen(false);
  };

  if (!isVisible && !shareLinkOpen) return null;

  return  <ModalWrapper>
  <div className='fixed bottom-0 z-40 max_min_width h-full'>
    <div
      className="w-full h-full bg-[rgba(0,0,0,0.6)]"
      onClick={handleClose}
    ></div>
    <div
      className={`fixed bottom-0 max_min_width rounded-[22px_22px_0_0] bg-white animate-${shareLinkOpen ? 'modalUp' : 'modalDown'}`}
    >
      <span
        onClick={handleClose}
        className="relative block w-full h-[15px] py-[11px] before:content-[''] before:absolute before:left-[50%] before:top-[11px] before:translate-x-[-50%] before:rounded-[42px] before:block before:w-[70px] before:h-[4px] before:bg-gray-300"
      ></span>
      <strong className="screen_out">공유하기 리스트</strong>
      <ul className="flex justify-between p-[33px] pt-[22px]">
        <li className="text-center">
          <span className="ico_pravel ico_copy56"></span>
          <span className="block pt-[10px]">링크 복사</span>
        </li>
        <li className="text-center">
          <span className="ico_pravel ico_kakao56"></span>
          <span className="block pt-[10px]">카카오톡</span>
        </li>
        <li className="text-center">
          <span className="ico_pravel ico_instagram56"></span>
          <span className="block pt-[10px]">인스타그램</span>
        </li>
        <li className="text-center">
          <span className="ico_pravel ico_x56"></span>
          <span className="block pt-[10px]">X</span>
        </li>
      </ul>
    </div>
  </div>
</ModalWrapper>
};

export default ShareLink;
