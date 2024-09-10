export enum ShowTypeCategory {
  list = 'list',
  map = 'map',
}

export enum TabCategory {
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
export interface DetailData {
  contentId: string;
  contentTypeId: string;
  category: string;
  thumbnail: string;
  title: string;
  addr1: string;
  addr2: string;
  playtime: string;
  hashtags: string[];
  homepage: string;
  tel: string;
  like: boolean;
  wish: boolean;
  review: number;
  rating: number;
}
