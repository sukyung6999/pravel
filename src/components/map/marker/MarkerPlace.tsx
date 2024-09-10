import { CustomOverlayMap, MapMarker } from 'react-kakao-maps-sdk';

import {
  CafeMarkerString,
  ChineseMarkerString,
  FoodMarkerString,
  JapaneseMarkerString,
  MarkerPlaceImage,
  TourMarkerString,
  WesternMarkerString,
} from '../../../lib/const/markers';

import style from '../map.module.css';

interface MarkerPlaceProps {
  contentId: string;
  category: string;
  color: string;
  lat: number;
  lng: number;
  title: string;
  onMarkerPlaceClick: (contentId: string) => void;
}

const MarkerPlace = ({
  contentId,
  category,
  color,
  lat,
  lng,
  title,
  onMarkerPlaceClick,
}: MarkerPlaceProps) => {
  let markerImage;

  switch (category) {
    case '양식':
      markerImage = MarkerPlaceImage(WesternMarkerString(color));
      break;
    case '중식':
      markerImage = MarkerPlaceImage(ChineseMarkerString(color));
      break;
    case '일식':
      markerImage = MarkerPlaceImage(JapaneseMarkerString(color));
      break;
    case '카페':
      markerImage = MarkerPlaceImage(CafeMarkerString(color));
      break;
    case '관광':
      markerImage = MarkerPlaceImage(TourMarkerString(color));
      break;
    default:
      markerImage = MarkerPlaceImage(FoodMarkerString(color));
  }

  return (
    <>
      <MapMarker
        position={{ lat, lng }}
        clickable={true}
        image={markerImage}
        onClick={() => onMarkerPlaceClick(contentId)}
      />
      <CustomOverlayMap
        position={{ lat, lng }}
        xAnchor={0.5}
        yAnchor={-1.25}
        zIndex={-1}
      >
        <div>
          <span className={style.txt_marker}>{title}</span>
        </div>
      </CustomOverlayMap>
    </>
  );
};

export default MarkerPlace;
