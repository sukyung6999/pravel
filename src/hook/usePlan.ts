import { useQuery } from '@tanstack/react-query';

import { getPlanDetails } from '@/services/api/plan.api';

export const useFetchPlan = () => {
  return useQuery({
    queryKey: ['plan'],
    queryFn: () => getPlanDetails(),
  });
};
