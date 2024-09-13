import { baseURL, setDefaultHeader } from '.';

interface FetchMenuListProps {
  tab: string;
  id: string;
  pageNo: number;
}

export const fetchMenuList = ({ tab, id, pageNo }: FetchMenuListProps) => {
  return fetch(`${baseURL}/${tab}/${id}/image?page=${pageNo}`, {
    headers: setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get detail image list');

    return res.json();
  });
};

export default {};
