import { WishDataProps } from '@/types/wish.type';

import { baseURL, setDefaultHeader } from '.';

export const GetWish = async () => {
  return fetch(`${baseURL}/wish`, {
    method: 'GET',
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) throw new Error('Network response was not ok');
    return res.json();
  });
};

export const PostWish = async (wishData: WishDataProps) => {
  return fetch(`${baseURL}/wish/${wishData.category}/${wishData.contentId}`, {
    method: 'POST',
    headers: await setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) throw new Error('Network response was not ok');
    return wishData.contentId;
  });
};
