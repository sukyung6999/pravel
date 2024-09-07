import { baseURL, setDefaultHeader } from '.';

export const fetchMenuList = (tab: string, id: string) => {
  return fetch(`${baseURL}/${tab}/${id}/image`, {
    headers: setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get detail image list');

    return res.json();
  });
};

export default {};
