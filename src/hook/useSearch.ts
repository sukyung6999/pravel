import { useQuery, UseQueryResult } from '@tanstack/react-query';

import * as tourApi from '@/services/api/search.api';
import { ListData } from '@/types/search.type';

interface SearchProps {
  lat?: number;
  lng?: number;
  pageNo: number;
}

export const useFetchTour = ({
  lat,
  lng,
  pageNo,
}: SearchProps): UseQueryResult<{ list: ListData[] }, Error> => {
  return useQuery({
    queryKey: ['tour', lat, lng, pageNo],
    queryFn: () => {
      return tourApi.fetchTour(lat!, lng!, pageNo);
    },
    enabled: lat !== undefined && lng !== undefined,
  });
};

export const useFetchFood = ({
  lat,
  lng,
  pageNo,
}: SearchProps): UseQueryResult<{ list: ListData[] }, Error> => {
  return useQuery({
    queryKey: ['restaurant', lat, lng, pageNo],
    queryFn: () => {
      return tourApi.fetchFood(lat!, lng!, pageNo);
    },
    enabled: lat !== undefined && lng !== undefined,
  });
};

export default {};
