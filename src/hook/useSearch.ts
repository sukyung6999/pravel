import { useQuery, UseQueryResult } from '@tanstack/react-query';

import * as searchApi from '@/services/api/search.api';
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
      return searchApi.fetchTour(lat!, lng!, pageNo);
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
      return searchApi.fetchFood(lat!, lng!, pageNo);
    },
    enabled: lat !== undefined && lng !== undefined,
  });
};

export const useFetchTourDetail = (id: string) => {
  return useQuery({
    queryKey: ['tour', 'detail', id],
    queryFn: () => {
      return searchApi.fetchTourDetail(id);
    },
  });
};

export const useFetchFoodDetail = (id: string) => {
  return useQuery({
    queryKey: ['food', 'detail', id],
    queryFn: () => searchApi.fetchFoodDetail(id),
  });
};

export default {};
