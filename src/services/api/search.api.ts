import { setDefaultHeader } from '.';

const TOUR = '/tour/';
const FOOD = '/food/';

export const baseURL = '/api';

interface BodyProps {
  x: number;
  y: number;
  pageNo: number;
  markers?: number;
  radius?: number;
}

export const fetchTour = (
  lat: number,
  lng: number,
  pageNo: number,
  markers?: number,
  radius?: number,
) => {
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
    headers: setDefaultHeader(),
    body: JSON.stringify(body),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Cannot get tour data');
    }
    return res.json();
  });
};

export const fetchFood = (
  lat: number,
  lng: number,
  pageNo: number,
  markers?: number,
  radius?: number,
) => {
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
    headers: setDefaultHeader(),
    body: JSON.stringify(body),
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get food data');
    return res.json();
  });
};

export const fetchDetail = (tab: string, id: string) => {
  const url = `${baseURL}/${tab}/${id}`;

  return fetch(url, {
    method: 'GET',
    headers: setDefaultHeader(),
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get tour detail');
    return res.json();
  });
};

export default {};
