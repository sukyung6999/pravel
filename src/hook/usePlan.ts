import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  activePlan,
  getPlanDetails,
  getPlanFutureList,
  getPlanId,
  getPlanSchedules,
} from '@/services/api/plan.api';

export const useFetchPlan = () => {
  return useQuery({
    queryKey: ['plan'],
    queryFn: () => getPlanDetails(),
  });
};
export const useFetchSchedules = (date: string) => {
  return useQuery({
    queryKey: ['plan', date],
    queryFn: async () => {
      const { planId } = await getPlanId();

      return getPlanSchedules(planId, date);
    },
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
