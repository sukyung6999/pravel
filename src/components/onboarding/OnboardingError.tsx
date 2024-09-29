const OnboardingError = ({
  errorKey,
}: {
  errorKey: 'date' | 'location' | 'startPoint' | 'endPoint' | '';
}) => {
  const errorText = {
    date: '날짜를 선택해주세요',
    location: '장소를 선택해주세요',
    startPoint: '여행 시작 지점을 선택해 주세요',
    endPoint: '여행 도착 지점을 선택해 주세요',
  };

  if (!errorKey) return null;

  return (
    <p className="fixed bottom-[75px] left-0 w-full bg-[#ffdede] text-[13px] text-[#ffa1a1] font-semibold pt-[16px] pb-[18px] text-center">
      {errorText[errorKey]}
    </p>
  );
};

export default OnboardingError;
