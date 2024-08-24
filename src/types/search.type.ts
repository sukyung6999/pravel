export enum ShowTypeCategory {
  list = 'list',
  map = 'map',
}

export enum tabCategory {
  food = 'food',
  tour = 'tour',
}
export interface LocationData {
  lat: number;
  lng: number;
}
export interface ListData {
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
  category: string;
  wish: boolean;
  like: boolean;
  review: number;
  rating: number;
}
