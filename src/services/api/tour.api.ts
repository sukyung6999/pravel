import { baseURL, getAuthorization, setDefaultHeader } from '.';

const TOUR = '/tour/';

export const fetchTour = async ([latitude, longitude]: [number, number]) => {
  const { token } = await getAuthorization();

  const url = new URL(`${baseURL}${TOUR}`);

  url.searchParams.append('x', latitude.toString());
  url.searchParams.append('y', longitude.toString());

  return fetch(url.toString(), {
    method: 'GET',
    headers: setDefaultHeader(token),
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Cannot get tour data');
    }
    return res.json();
  });
};

export default {};
