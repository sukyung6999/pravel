import { useQuery, UseQueryResult } from '@tanstack/react-query';

import getLocation from '@/services/api/location.api';
import { LocationData } from '@/types/search.type';

export const useFetchLocation = (): UseQueryResult<LocationData, Error> => {
  return useQuery<LocationData, Error>({
    queryKey: ['location'],
    queryFn: () => {
      return getLocation();
    },
  });
};

export default {};
