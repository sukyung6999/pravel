import { KeywordListData, ListResultProps } from '@/types/search.type';

import { baseURL, setDefaultHeader } from '.';

interface ListProps {
  tab: string;
  lat: number;
  lng: number;
  pageNo: number;
  markers?: number;
  radius?: number;
}

interface BodyProps {
  x: number;
  y: number;
  markers?: number;
  radius?: number;
}

export const fetchSearchList = async ({
  tab,
  lat,
  lng,
  pageNo,
  markers,
  radius,
}: ListProps): Promise<ListResultProps> => {
  const url = `${baseURL}/${tab}?page=${pageNo}`;

  const body: BodyProps = {
    x: lng,
    y: lat,
    radius: 2000,
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
