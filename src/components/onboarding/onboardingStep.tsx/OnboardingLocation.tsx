'use client';

import { useState } from 'react';

import useModal, { MODAL } from '@/hook/useModal';
import { useOnboardingStateStore } from '@/store';

import OnboardingLayout from '../OnboardingLayout';
import OnboardingLocationModal from '../onboardingModal.tsx/OnboardingLocationModal';

const OnboardingLocation = () => {
  const [modalState, { openModal, closeModal }] = useModal({
    [MODAL.ONBOARDING_SEARCH_LOCATION]: false,
  });

  const [modalType, setModalType] = useState<'startPoint' | 'endPoint'>(
    'startPoint',
  );

  const { startPoint, endPoint } = useOnboardingStateStore();

  const openLocationModal = (modal: 'startPoint' | 'endPoint') => {
    openModal(MODAL.ONBOARDING_SEARCH_LOCATION);
    setModalType(modal);
  };

  return (
    <>
      <OnboardingLayout titlePrimary="출발, 도착은" title="어디에서 하시나요?">
        <div className="relative mb-[10px] bg-gray-100 w-full py-[14px] px-[20px] rounded-lg flex justify-between items-center font-semibold">
          <label className="text-gray-600" htmlFor="onboardingLocation">
            여행 시작 지점
          </label>
          <input
            type="text"
            id="onboardingLocation"
            className="text-right text-gray-800 text-[15px] bg-gray-100"
            value={startPoint}
            placeholder="장소를 선택해 주세요"
            readOnly
          />
          <button
            type="button"
            onClick={() => openLocationModal('startPoint')}
            className="absolute w-full h-full top-0 left-0"
          >
            <span className="blind">장소 선택 팝업버튼</span>
          </button>
        </div>
        <div className="relative mb-[10px] bg-gray-100 w-full py-[14px] px-[20px] rounded-lg flex justify-between items-center font-semibold">
          <label className="text-gray-600" htmlFor="onboardingLocation">
            여행 끝 지점
          </label>
          <input
            type="text"
            id="onboardingLocation"
            className="text-right text-gray-800 text-[15px] bg-gray-100"
            value={endPoint}
            placeholder="장소를 선택해 주세요"
            readOnly
          />
          <button
            type="button"
            onClick={() => openLocationModal('endPoint')}
            className="absolute w-full h-full top-0 left-0"
            // ariaExpanded={openLocationModal}
            // ariaControls="searchPopup"
          >
            <span className="blind">장소 선택 팝업버튼</span>
          </button>
        </div>
      </OnboardingLayout>
      {modalState.onboardingSearchLocation && (
        <OnboardingLocationModal
          modalType={modalType}
          closeModal={() => {
            closeModal(MODAL.ONBOARDING_SEARCH_LOCATION);
          }}
        />
      )}
    </>
  );
};

export default OnboardingLocation;
