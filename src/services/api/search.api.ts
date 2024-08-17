const TOUR = '/tour/';
const FOOD = '/restaurant';

export const baseURL = '/api';

export const fetchTour = (lat: number, lng: number, pageNo: number) => {
  const url = `${baseURL}${TOUR}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      x: lng,
      y: lat,
      pageNo,
    }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Cannot get tour data');
    }
    return res.json();
  });
};

export const fetchFood = (lat: number, lng: number, pageNo: number) => {
  const url = `${baseURL}${FOOD}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      x: lng,
      y: lat,
      pageNo,
    }),
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get food data');
    return res.json();
  });
};

export const fetchTourDetail = (id: string) => {
  const url = `${baseURL}${TOUR}${id}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get tour detail');
    return res.json();
  });
};

export const fetchFoodDetail = (id: string) => {
  const url = `${baseURL}${FOOD}${id}`;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  }).then((res) => {
    if (!res.ok) throw new Error('Cannot get food detail');
    return res.json();
  });
};

export default {};
