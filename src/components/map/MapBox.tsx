import { useRef, useState } from 'react';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

import useKakaoLoader from '@/hook/useKakaoLoader';
import useFetchLocation from '@/hook/useLocation';
import { ListData } from '@/types/search.type';

import LoadingSpinner from '../common/loading/LoadingSpinner';

import MapCard from './card/MapCard';
import MarkerCurrent from './marker/MarkerCurrent';
import MarkerPlace from './marker/MarkerPlace';

interface MapBoxProps {
  list: ListData[];
  isFetching: boolean;
  tab: string;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult>;
}

const MapBox = ({ list, isFetching, tab, fetchNextPage }: MapBoxProps) => {
  useKakaoLoader();
  // const [mapLevel, setMapLevel] = useState(3);
  const mapLevel = useRef(3);
  const [clickedMarker, setClickedMarker] = useState<ListData | null>(null);

  const { data: location, isError } = useFetchLocation();

  console.log(location);

  if (isError) return <p>위치 정보를 가져오는데 실패했습니다.</p>;

  const handleClickMarker = (cardInfo: ListData) => {
    setClickedMarker((prev) => {
      if (prev?.contentId === cardInfo.contentId) {
        return null;
      } else {
        return cardInfo;
      }
    });
  };
  const handleMapClick = () => {
    setClickedMarker(null);
  };

  return (
    <div className="mb-[25px]">
      <Map
        center={{ lat: 37.5696765, lng: 126.976177 }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
        onClick={handleMapClick}
        draggable={true}
        level={mapLevel.current}
        onZoomChanged={async (map) => {
          const currentLevel = map.getLevel();

          if (currentLevel > mapLevel.current) {
            fetchNextPage();
            mapLevel.current += 1;
          } else {
            mapLevel.current -= 1;
          }
        }}
      >
        <MarkerCurrent
          lat={37.5696765}
          lng={126.976177}
          color={clickedMarker ? '#FF9040' : '#0BC58D'}
        />
        {isFetching && (
          <LoadingSpinner className="absolute z-[20] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
        )}
        {!isFetching && (
          <MarkerClusterer
            averageCenter={true}
            minLevel={6}
            styles={[
              {
                minWidth: '30px',
                minHeight: '30px',
                color: 'rgb(255, 255, 255)',
                fontSize: '12px',
                lineHeight: '30px',
                textAlign: 'center',
                borderRadius: '50%',
                backgroundColor: '#0BC58D',
                opacity: 0.7,
              },
            ]}
          >
            {list.map((marker) => (
              <MarkerPlace
                key={marker.contentId}
                contentId={marker.contentId}
                category={marker.category}
                color={
                  clickedMarker?.contentId === marker.contentId
                    ? '#0BC58D'
                    : '#FFF'
                }
                title={marker.title}
                lat={marker.lon as number}
                lng={marker.lat as number}
                onMarkerPlaceClick={() => handleClickMarker(marker)}
              />
            ))}
          </MarkerClusterer>
        )}
        {clickedMarker && <MapCard item={clickedMarker} tab={tab} />}
      </Map>
    </div>
  );
};

export default MapBox;
