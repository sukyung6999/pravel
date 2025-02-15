'use client';

import { useEffect, useState } from 'react';

import areas from '@/data/areas.json';
import { useOnboardingStateStore, useOnboardingStepStore } from '@/store';

import styles from './OnboardingLocation.module.css';

interface OnboardingModalType {
  modalType: 'location' | 'startPoint' | 'endPoint';
  closeModal: () => void;
}
const OnboardingLocationModal = ({
  closeModal,
  modalType,
}: OnboardingModalType) => {
  const [search, setSearch] = useState('');
  const [filteredAreas, setFilteredAreas] = useState<string[]>([]);

  // const { location, onChange } = useOnboardingStateStore((state) => ({
  //   location: state[modalType], // 동적으로 사용할 때 (location 일수도, startPoint 일수도 있는 정해져 있지않은 값)
  //   onChange: state.onChange, // 정해진 키가 있을 때
  // }));

  const { location, startPoint, endPoint, onChange } =
    useOnboardingStateStore();
  const { setError } = useOnboardingStepStore();

  const [selectedArea, setSelectedArea] = useState(location);

  useEffect(() => {
    if (modalType === 'location') setSelectedArea(location);
    else if (modalType === 'startPoint') setSelectedArea(startPoint);
    else if (modalType === 'endPoint') setSelectedArea(endPoint);
  }, [modalType, location, startPoint, endPoint]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);
    if (value.trim() === '') setFilteredAreas([]);
    else {
      const filtered = areas.filter((area) =>
        area.toLocaleLowerCase().includes(value.toLowerCase()),
      );

      setFilteredAreas(filtered);
    }
  };

  const handleSelect = (e: React.MouseEvent) => {
    setSelectedArea((e.target as HTMLButtonElement)!.closest('li')!.innerText);
  };

  const resetSearch = () => {
    setSearch('');
    setFilteredAreas([]);
  };

  const highlightSearch = (area: string, searchTerm: string) => {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = area.split(regex).filter((v) => v);

    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <span className="text-primary" key={i}>
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          ),
        )}
      </>
    );
  };

  const handleSubmit = () => {
    closeModal();
    setError('');
    onChange(modalType, selectedArea);
  };

  return (
    <div className="onboarding-modal modal-content absolute bottom-0 left-0 w-full rounded-[20px_20px_0_0] pb-[34px] px-[16px] bg-white shadow-[0_-3px_20px_0px_rgba(0,0,0,0.1)]">
      <button
        onClick={closeModal}
        className="blind block w-full before:content-[''] before:block before:w-[62px] before:h-[4px] before:bg-gray-300 mt-[10px] before:mb-[22px] before:mx-[auto] "
      >
        하단으로 모달창 내리기
      </button>
      <div>
        <h2 id="popupTitle" className="screen_out">
          장소 검색
        </h2>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="search" className="blind">
            장소 검색
          </label>
          <div
            className={`${styles.input_rounded_box} flex items-center mb-[5px]`}
          >
            <i className="ico_pravel ico_search30 basis-10" />
            <input
              type="text"
              id="search"
              placeholder="여행하고 싶은 장소를 입력해주세요"
              aria-label="장소 검색"
              className="bg-gray-100 w-full grow outline-none pl-[11px] text-[14px] autofill:bg-gray-100"
              value={search}
              onChange={handleSearch}
            />
            <button
              type="reset"
              aria-label="검색 초기화"
              className="ico_pravel ico_close24"
              onClick={resetSearch}
            ></button>
          </div>

          {filteredAreas.length > 0 && (
            <ul
              className={`${styles.input_rounded_box} text-left text-gray-600 font-medium text-[14px] max-h-[198px] overflow-scroll`}
              role="listbox"
              aria-labelledby="popupTitle"
            >
              {filteredAreas.map((area, index) => (
                <li key={index}>
                  <button onClick={handleSelect} type="button">
                    {highlightSearch(area, search)}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </form>

        <div className="text-left mt-[35px] mb-[20px] mx-auto">
          <p className="pb-[6px] text-gray-600 font-semibold text-[14px]">
            {modalType === 'location' && '선택한 여행지'}
            {modalType === 'startPoint' && '여행 시작 지점'}
            {modalType === 'endPoint' && '여행 끝 지점'}
          </p>
          <p className="text-[18px] font-semibold">
            <i className="ico_pravel ico_location24"></i>
            {selectedArea}
          </p>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full py-[1em] rounded-xl font-bold bg-primary text-white"
        >
          선택 완료
        </button>
      </div>
    </div>
  );
};

export default OnboardingLocationModal;
