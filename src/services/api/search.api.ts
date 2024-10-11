import { KeywordListData, ListResultProps } from '@/types/search.type';

import { baseURL, setDefaultHeader } from '.';

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
  const url = `${baseURL}/tour`;

  const body: BodyProps = {
    x: lng,
    y: lat,
    pageNo,
    radius: 4000,
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
  const url = `${baseURL}/food`;

  const body: BodyProps = {
    x: lng,
    y: lat,
    pageNo,
    radius: 4000,
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

export const fetchKeywordList = async (
  keyword: string,
): Promise<KeywordListData[]> => {
  return fetch(`${baseURL}/search?keyword=${keyword}`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get keyword data');

    return res.json();
  });
};

export default {};
