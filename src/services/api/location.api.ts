import { LocationData } from '@/types/search.type';

const getLocation = (): Promise<LocationData> => {
  return new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }),
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
};

export default getLocation;
