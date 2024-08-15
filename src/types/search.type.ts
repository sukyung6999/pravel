enum ShowTypeCategory {
  list = 'list',
  map = 'map',
}

enum tabCategory {
  food = 'food',
  tour = 'tour',
}
interface ListData {
  contentId: string;
  firstImage: string;
  title: string;
  mapx: number;
  mapy: number;
  like: boolean;
}
export { ShowTypeCategory, tabCategory };
export type { ListData };
