export const CATEGORY = [
  {
    ko: '맛집',
    en: 'food',
  },
  {
    ko: '관광',
    en: 'tour',
  },
];

export const DEFAULT_LOCATION = {
  lat: 37.579617,
  lng: 126.977041,
};

export const FOOD_FILTER = {
  전체: 'all',
  한식: 'korean',
  양식: 'western',
  일식: 'japanese',
  중식: 'chinese',
  카페: 'cafe',
  기타: 'etc',
} as const;
export default {};
