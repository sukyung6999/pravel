'use client';

import { useFetchDetail } from '@/hook/useSearch';

import ButtonBox from '../box/ButtonBox';

import ImageBox from './box/ImageBox';
import InfoBox from './box/InfoBox';
import ReviewBox from './box/ReviewBox';

interface DetailProps {
  tab: string;
  detailId: string;
}

const Detail = ({ tab, detailId }: DetailProps) => {
  const { data, isSuccess } = useFetchDetail({ tab, id: detailId });

  return (
    <>
      {isSuccess && <ImageBox thumbnail={data.thumbnail} />}
      <InfoBox />
      <ReviewBox />
      <ButtonBox like={false} />
    </>
  );
};

export default Detail;
