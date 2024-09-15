import { DetailData, DetailMenuProps } from '@/types/search.type';

import { baseURL, setDefaultHeader } from '.';

interface FetchDetailProps {
  tab: string;
  id: string;
}

interface FetchMenuListProps {
  tab: string;
  id: string;
  pageNo: number;
}

export const fetchDetail = async ({
  tab,
  id,
}: FetchDetailProps): Promise<DetailData> => {
  const url = `${baseURL}/${tab}/${id}`;

  return fetch(url, {
    method: 'GET',
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get tour detail');
    return res.json();
  });
};

export const fetchMenuList = async ({
  tab,
  id,
  pageNo,
}: FetchMenuListProps): Promise<DetailMenuProps> => {
  return fetch(`${baseURL}/${tab}/${id}/image?page=${pageNo}`, {
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get detail image list');

    return res.json();
  });
};

export default {};
