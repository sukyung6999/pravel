interface KakaoShareButton {
  container: string;
  objectType: 'feed' | 'list' | 'commerce' | 'location' | 'text';
  content: {
    title: string;
    description: string;
    imageUrl: string;
    link: {
      mobileWebUrl?: string;
      webUrl?: string;
    };
  };
  itemContent?: {
    profileText: string;
    profileImageUrl: string;
    titleImageUrl: string;
    titleImageText: string;
    titleImageCategory: string;
    items?: Array<{
      item: string;
      itemOp: string;
    }>;
    sum: string;
    sumOp: string;
  };
  social?: {
    likeCount?: number;
    commentCount?: number;
    sharedCount?: number;
  };
  buttons?: Array<{
    title: string;
    link: {
      mobileWebUrl?: string;
      webUrl?: string;
    };
  }>;
  address?: string;
  addressTitle?: string;
}

interface KakaoStatic {
  init: (appKey: string) => void;
  isInitialized: () => boolean;
  Share: {
    createDefaultButton: (settings: KakaoShareButton) => void;
  };
}

interface Window {
  Kakao: KakaoStatic;
}
