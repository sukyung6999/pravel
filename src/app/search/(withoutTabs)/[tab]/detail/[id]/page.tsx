import ButtonBox from '@/components/search/box/ButtonBox';
import ImageBox from '@/components/search/detail/box/ImageBox';
import InfoBox from '@/components/search/detail/box/InfoBox';
import ReviewBox from '@/components/search/detail/box/ReviewBox';

interface DetailContentProps {
  params: {
    tab: string;
    id: string;
  };
}

const DetailContent = ({ params }: DetailContentProps) => {
  const tab = params.tab;
  const detailId = params.id;

  return (
    <div className="pt-[64px] pb-[92px]">
      <ImageBox tab={tab} detailId={detailId} />
      <InfoBox />
      <ReviewBox />
      <ButtonBox like={false} />
    </div>
  );
};

export default DetailContent;
