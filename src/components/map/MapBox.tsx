import { useState } from 'react';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

import useKakaoLoader from '@/hook/useKakaoLoader';
import useFetchLocation from '@/hook/useLocation';
import { ListData } from '@/types/search.type';

import MapCard from './card/MapCard';
import MarkerCurrent from './marker/MarkerCurrent';
import MarkerPlace from './marker/MarkerPlace';
import FullLoadingSpinner from '../common/loading/FullLoadingSpinner';

interface MapBoxProps {
  list: ListData[];
  isFetching: boolean;
  tab: string;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult>;
}
const LoadingComponent = () => <FullLoadingSpinner />;

const MapBox = ({ list, isFetching, tab, fetchNextPage }: MapBoxProps) => {
  const [loading, isMapFetchError] = useKakaoLoader();

  const [mapLevel, setMapLevel] = useState(3);
  const [clickedMarker, setClickedMarker] = useState<ListData | null>(null);

  const { data: location, isError: isDataFetchError } = useFetchLocation();

  // console.log(location);

  if (loading) return LoadingComponent();
  if (isMapFetchError) return <p>지도를 불러오는데 실패했습니다.</p>;
  if (isDataFetchError) return <p>위치 정보를 가져오는데 실패했습니다.</p>;

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
        level={mapLevel}
        onIdle={async (map) => {
          const currentLevel = map.getLevel();

          setMapLevel(currentLevel);
          if (currentLevel > mapLevel) {
            fetchNextPage();
          }
        }}
      >
        <MarkerCurrent
          lat={37.5696765}
          lng={126.976177}
          color={clickedMarker ? '#FF9040' : '#0BC58D'}
        />
        {isFetching ? (
          LoadingComponent()
        ) : (
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
