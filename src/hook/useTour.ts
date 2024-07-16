import { useQuery } from '@tanstack/react-query';

import { getAuthorization } from '@/services/api';
import * as tourApi from '@/services/api/tour.api';

function getLocation(): Promise<[number, number]> {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve([position.coords.latitude, position.coords.longitude]),
        (error) => reject(error),
      );
    } else {
      reject(
        new Error(
          'Geolocation is not supported by this browser or environment.',
        ),
      );
    }
  });
}

export const useFetchTour = () => {
  const { email } = getAuthorization();

  return useQuery({
    queryKey: ['tour'],
    queryFn: async () => {
      const geocoordinates = await getLocation();

      return tourApi.fetchTour(geocoordinates);
    },
    enabled: !!email,
  });
};

export default {};
