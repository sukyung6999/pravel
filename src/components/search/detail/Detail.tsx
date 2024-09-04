'use client';

import { useFetchDetail } from '@/hook/useSearch';

import ButtonBox from '../util/ButtonBox';

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
      {isSuccess && (
        <div>
          <ImageBox thumbnail={data.thumbnail} />
          <InfoBox info={data} />
          <ReviewBox />
          <ButtonBox like={false} />
        </div>
      )}
    </>
  );
};

export default Detail;
