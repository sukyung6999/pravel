'use client';

import { useState } from 'react';

import FullLoadingSpinner from '@/components/common/loading/FullLoadingSpinner';
import { useFetchDetail } from '@/hook/useDetail';

import ButtonBox from '../util/ButtonBox';

import ImageBox from './box/ImageBox';
import InfoBox from './box/InfoBox';
import MenuBox from './box/MenuBox';
import ReviewBox from './box/ReviewBox';
import ShareLink from './modal/ShareLink';

interface DetailProps {
  tab: string;
  detailId: string;
}

const Detail = ({ tab, detailId }: DetailProps) => {
  const [shareLinkOpen, setShareLinkOpen] = useState<boolean>(false);
  const { data, isLoading } = useFetchDetail({ tab, id: detailId });

  if (isLoading || data === undefined) return <FullLoadingSpinner />;

  return (
    <>
      <ImageBox
        thumbnail={data.thumbnail}
        setShareLinkOpen={setShareLinkOpen}
      />
      <InfoBox info={data} />
      <MenuBox tab={tab} id={data.contentId} />
      <ReviewBox />
      <ButtonBox like={false} />
      <ShareLink
        shareLinkOpen={shareLinkOpen}
        setShareLinkOpen={setShareLinkOpen}
      />
    </>
  );
};

export default Detail;
