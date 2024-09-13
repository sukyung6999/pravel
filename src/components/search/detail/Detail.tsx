'use client';

import { useFetchDetail } from '@/hook/useSearch';

import ButtonBox from '../util/ButtonBox';

import ImageBox from './box/ImageBox';
import InfoBox from './box/InfoBox';
import MenuBox from './box/MenuBox';
import ReviewBox from './box/ReviewBox';
import FullLoadingSpinner from '@/components/common/loading/FullLoadingSpinner';

interface DetailProps {
  tab: string;
  detailId: string;
}

const Detail = ({ tab, detailId }: DetailProps) => {
  const { data, isLoading } = useFetchDetail({ tab, id: detailId });

  if (isLoading) return <FullLoadingSpinner />;

  return (
    <>
      <ImageBox thumbnail={data.thumbnail} />
      <InfoBox info={data} />
      <MenuBox tab={tab} id={data.contentId} />
      <ReviewBox />
      <ButtonBox like={false} />
    </>
  );
};

export default Detail;
