import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  activePlan,
  getPlanDetails,
  getPlanFutureList,
} from '@/services/api/plan.api';

export const useFetchPlan = () => {
  return useQuery({
    queryKey: ['plan'],
    queryFn: () => getPlanDetails(),
  });
};

export const useFetchPlanFuture = () => {
  return useQuery({
    queryKey: ['plan', 'future'],
    queryFn: getPlanFutureList,
  });
};

export const useActivePlanMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => activePlan(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['plan'],
      });
    },
  });
};
