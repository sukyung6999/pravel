import TravelRecordDetailComponent from '@/components/record/TravelRecordDetailComponent';
import { getPlanRecord } from '@/lib/actions/plan-action';

interface TravelRecordDetailProps {
  params: {
    id: string;
  };
}

const TravelRecordDetail = async ({
  params: { id },
}: TravelRecordDetailProps) => {
  const data = await getPlanRecord(id);

  return <TravelRecordDetailComponent {...data} />;
};

export default TravelRecordDetail;
