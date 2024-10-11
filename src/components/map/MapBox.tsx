import { useState } from 'react';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

import useKakaoLoader from '@/hook/useKakaoLoader';
import useFetchLocation from '@/hook/useLocation';
import { ListData } from '@/types/search.type';

import FullLoadingSpinner from '../common/loading/FullLoadingSpinner';

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
  onClickRefetch: (lat: number, lng: number) => void;
}
const LoadingComponent = () => <FullLoadingSpinner />;

const MapBox = ({ list, isFetching, tab, onClickRefetch }: MapBoxProps) => {
  const [loading, isMapFetchError] = useKakaoLoader();
  const { data: location, isError: isDataFetchError } = useFetchLocation();

  const [isDragged, setIsDragged] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(location);

  const [clickedMarker, setClickedMarker] = useState<ListData | null>(null);

  if (isDataFetchError) return <p>위치 정보를 가져오는데 실패했습니다.</p>;
  if (loading || !location) return LoadingComponent();
  if (isMapFetchError) return <p>지도를 불러오는데 실패했습니다.</p>;

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
    <div className="relative">
      {isDragged && (
        <button
          type="button"
          className="absolute z-[100] top-[10px] left-[50%] px-[10px] py-[8px] translate-x-[-50%] bg-white border border-gray-500 rounded-[25px]"
          onClick={() =>
            onClickRefetch(currentLocation!.lat, currentLocation!.lng)
          }
        >
          이지역 재검색
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 inline-block ml-[4px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      )}
      <Map
        center={{ lat: location.lat, lng: location.lng }}
        style={{ width: '100%', height: 'calc(100vh - 200px)' }}
        onClick={handleMapClick}
        draggable={true}
        level={4}
        onDragEnd={(map) => {
          const latlng = map.getCenter();

          setIsDragged(true);
          setCurrentLocation({ lat: latlng.getLat(), lng: latlng.getLng() });
        }}
      >
        <MarkerCurrent
          lat={location?.lat}
          lng={location?.lng}
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
