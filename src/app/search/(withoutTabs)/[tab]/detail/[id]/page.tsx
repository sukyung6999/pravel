import Detail from '@/components/search/detail/Detail';

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
      <Detail tab={tab} detailId={detailId} />
    </div>
  );
};

export default DetailContent;
