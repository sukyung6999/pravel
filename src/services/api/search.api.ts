import { ListResultProps } from '@/types/search.type';

import { baseURL, setDefaultHeader } from '.';

const TOUR = '/tour/';
const FOOD = '/food/';

interface ListProps {
  lat: number;
  lng: number;
  pageNo: number;
  markers?: number;
  radius?: number;
}

interface BodyProps {
  x: number;
  y: number;
  pageNo: number;
  markers?: number;
  radius?: number;
}

export const fetchTour = async ({
  lat,
  lng,
  pageNo,
  markers,
  radius,
}: ListProps): Promise<ListResultProps> => {
  const url = `${baseURL}${TOUR}`;

  const body: BodyProps = {
    x: lng,
    y: lat,
    pageNo,
  };

  if (markers !== undefined) body.markers = markers;
  if (radius !== undefined) body.radius = radius;

  return fetch(url, {
    method: 'POST',
    headers: await setDefaultHeader(),
    body: JSON.stringify(body),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Cannot get tour data');
    }
    return res.json();
  });
};

export const fetchFood = async ({
  lat,
  lng,
  pageNo,
  markers,
  radius,
}: ListProps): Promise<ListResultProps> => {
  const url = `${baseURL}${FOOD}`;

  const body: BodyProps = {
    x: lng,
    y: lat,
    pageNo,
  };

  if (markers !== undefined) body.markers = markers;
  if (radius !== undefined) body.radius = radius;
  return fetch(url, {
    method: 'POST',
    headers: await setDefaultHeader(),
    body: JSON.stringify(body),
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get food data');
    return res.json();
  });
};

export default {};
