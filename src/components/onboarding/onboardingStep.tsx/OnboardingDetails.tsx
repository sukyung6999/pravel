import useModal, { MODAL } from '@/hook/useModal';
import { useOnboardingStateStore } from '@/store';
import getDates from '@/utils/getDates';

import OnboardingLayout from '../OnboardingLayout';
import OnboardingDateModal from '../onboardingModal.tsx/OnboardingDateModal';
import OnboardingLocationModal from '../onboardingModal.tsx/OnboardingLocationModal';

const OnboardingDetails = () => {
  const [modalState, { openModal, closeModal }] = useModal({
    [MODAL.ONBOARDING_CALENDAR]: false,
    [MODAL.ONBOARDING_SEARCH_LOCATION]: false,
  });

  const openDateModal = () => {
    openModal(MODAL.ONBOARDING_CALENDAR);
  };
  const openLocationModal = () => {
    openModal(MODAL.ONBOARDING_SEARCH_LOCATION);
  };

  const { startDate, endDate, location, adult, child, onChangeFn } =
    useOnboardingStateStore();

  const formattedStartDate = startDate && getDates(startDate, true);
  const formattedEndDate = endDate && getDates(endDate, true);

  const formattedDate =
    formattedStartDate !== undefined
      ? `${formattedStartDate?.year}.${formattedStartDate?.month}.${formattedStartDate?.day} (${formattedStartDate?.dayOfWeek}) ${
          formattedEndDate !== undefined
            ? `- ${formattedEndDate?.year}.${formattedEndDate?.month}.${formattedEndDate?.day} (${formattedEndDate?.dayOfWeek})`
            : ''
        }`
      : '';

  const handleIncreaseAdult = () => {
    onChangeFn('adult', (prev) => prev + 1);
  };

  const handleDecreaseAdult = () => {
    onChangeFn('adult', (prev) => (prev > 0 ? prev - 1 : 0));
  };

  // 아동 인원수 증가, 감소 함수
  const handleIncreaseChild = () => {
    onChangeFn('child', (prev) => prev + 1);
  };

  const handleDecreaseChild = () => {
    onChangeFn('child', (prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <>
      <OnboardingLayout
        titlePrimary="언제, 어디로, 몇 명이서"
        title="떠나시나요?"
      >
        <div
          className={`relative mb-[10px] bg-gray-100 w-full py-[14px] px-[20px] rounded-lg flex justify-between items-center font-semibold box-border ${modalState[MODAL.ONBOARDING_CALENDAR] === true && 'border-[1.5px] border-primary'}`}
        >
          <label className="text-gray-600" htmlFor="onboardingDate">
            날짜
          </label>
          <input
            readOnly
            type="text"
            id="onboardingDate"
            value={formattedDate}
            placeholder="날짜를 선택해 주세요"
            className="w-[250px] text-right text-gray-800  bg-gray-100 text-[15px]"
          />
          <button
            type="button"
            onClick={openDateModal}
            className="absolute w-full h-full top-0 left-0"
          >
            <span className="blind">날짜 선택 팝업버튼</span>
          </button>
        </div>
        <div
          className={`relative mb-[10px] bg-gray-100 w-full py-[14px] px-[20px] rounded-lg flex justify-between items-center font-semibold ${modalState[MODAL.ONBOARDING_SEARCH_LOCATION] === true && 'border-[1.5px] border-primary'}`}
        >
          <label className="text-gray-600" htmlFor="onboardingLocation">
            장소
          </label>
          <input
            type="text"
            id="onboardingLocation"
            className="text-right text-gray-800 text-[15px] bg-gray-100"
            value={location}
            placeholder="장소를 선택해 주세요"
            readOnly
          />
          <button
            type="button"
            onClick={openLocationModal}
            className="absolute w-full h-full top-0 left-0"
            aria-expanded={modalState[MODAL.ONBOARDING_SEARCH_LOCATION]}
            aria-controls="popupTitle"
          >
            <span className="blind">장소 선택 팝업버튼</span>
          </button>
        </div>
        <div className="relative mb-[10px] bg-gray-100 w-full py-[14px] px-[20px] rounded-lg font-semibold">
          <div className="flex justify-between items-center mb-[20px]">
            <label className="text-gray-600">성인</label>
            <div className="relative w-[102px] h-[21px]">
              <input
                type="number"
                className="outline-none text-center bg-gray-100 appearance-none hover:appearance-none w-full"
                min={0}
                value={adult}
                readOnly
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between w-full">
                <button
                  type="button"
                  onClick={handleDecreaseAdult}
                  className="ico_pravel ico_prev_box20"
                ></button>
                <button
                  type="button"
                  onClick={handleIncreaseAdult}
                  className="ico_pravel ico_next_box20"
                ></button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <label className="text-gray-600">아동</label>
            <div className="relative w-[102px] h-[21px]">
              <input
                type="number"
                className="outline-none text-center bg-gray-100 appearance-none hover:appearance-none w-full"
                min={0}
                value={child}
                readOnly
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between w-full">
                <button
                  type="button"
                  onClick={handleDecreaseChild}
                  className="ico_pravel ico_prev_box20"
                ></button>
                <button
                  type="button"
                  onClick={handleIncreaseChild}
                  className="ico_pravel ico_next_box20"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </OnboardingLayout>
      {modalState.onboardingCalendar && (
        <OnboardingDateModal
          closeModal={() => {
            closeModal(MODAL.ONBOARDING_CALENDAR);
          }}
        />
      )}
      {modalState.onboardingSearchLocation && (
        <OnboardingLocationModal
          modalType="location"
          closeModal={() => {
            closeModal(MODAL.ONBOARDING_SEARCH_LOCATION);
          }}
        />
      )}
    </>
  );
};

export default OnboardingDetails;
