import { useEffect } from 'react';

import { DetailData } from '@/types/search.type';

interface KakaoShareButtonProps {
  data: DetailData;
  children: React.ReactNode;
}

export default function KakaoShareButton({
  data,
  children,
}: KakaoShareButtonProps) {
  useEffect(() => {
    kakaoButton();
  }, []);

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY as string);
      }

      kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'location',
        address: `${data.addr1} ${data.addr2}`,
        addressTitle: data.addr1,
        content: {
          title: data.title,
          description: 'pravel로 여행가자',
          imageUrl:
            'http://k.kakaocdn.net/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
          link: {
            mobileWebUrl: 'https://pravel.site',
            webUrl: 'https://pravel.site',
          },
        },
        social: {
          likeCount: Number(data.wish),
          commentCount: Number(data.review),
          sharedCount: 845,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://pravel.site',
              webUrl: 'https://pravel.site',
            },
          },
        ],
      });
    }
  };

  return <button id="kakaotalk-sharing-btn">{children}</button>;
}
