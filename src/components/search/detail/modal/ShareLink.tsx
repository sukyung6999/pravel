import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import ModalWrapper from '@/layout/wrapper/ModalWrapper';
import { DetailData } from '@/types/search.type';

import KakaoShareButton from '../buttons/kakaoShareBtn';

import styled from '../detail.module.css';

interface ShareLinkProps {
  data: DetailData;
  shareLinkOpen: boolean;
  setShareLinkClose: () => void;
}
const ShareLink = ({
  data,
  setShareLinkClose,
  shareLinkOpen,
}: ShareLinkProps) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (shareLinkOpen) {
      setIsVisible(true);
      return undefined;
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [shareLinkOpen]);

  if (!isVisible) return null;

  return (
    <ModalWrapper>
      <div className="fixed bottom-0 z-40 max_min_width h-full">
        <div
          className="w-full h-full bg-[rgba(0,0,0,0.6)]"
          onClick={setShareLinkClose}
        ></div>
        <div
          className={`fixed bottom-0 max_min_width rounded-[22px_22px_0_0] bg-white transition-transform ${shareLinkOpen ? 'animate-modalUp' : ' animate-modalDown'}`}
        >
          <span
            onClick={setShareLinkClose}
            className="relative block w-full h-[15px] py-[11px] before:content-[''] before:absolute before:left-[50%] before:top-[11px] before:translate-x-[-50%] before:rounded-[42px] before:block before:w-[70px] before:h-[4px] before:bg-gray-300"
          ></span>
          <strong className="screen_out">공유하기 리스트</strong>
          <ul className={styled.list_links}>
            <li className={styled.item_link}>
              <span className="ico_pravel ico_copy56"></span>
              <span className={styled.txt_link}>링크 복사</span>
            </li>
            <li className={styled.item_link}>
              <KakaoShareButton data={data}>
                <span className="ico_pravel ico_kakao56"></span>
                <span className={styled.txt_link}>카카오톡</span>
              </KakaoShareButton>
            </li>
            <li className={styled.item_link}>
              <span className="ico_pravel ico_instagram56"></span>
              <span className={styled.txt_link}>인스타그램</span>
            </li>
            <li className={styled.item_link}>
              <a
                className="twitter-share-button"
                href={`https://twitter.com/intent/post?url=${router}&text=${data.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico_pravel ico_x56"></span>
                <span className={styled.txt_link}>X</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ShareLink;
