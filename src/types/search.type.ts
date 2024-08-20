enum ShowTypeCategory {
  list = 'list',
  map = 'map',
}

enum tabCategory {
  food = 'food',
  tour = 'tour',
}
interface LocationData {
  lat: number;
  lng: number;
}
interface ListData {
  contentId: string;
  contentTypeId: string;
  thumbnail: string;
  title: string;
  lat: number;
  lon: number;
  tel: string;
  address: string;
  playtime: string;
  hashtags: string[];
  wish: boolean;
  like: boolean;
  review: number;
  rating: number;
}
export { ShowTypeCategory, tabCategory };
export type { ListData, LocationData };
