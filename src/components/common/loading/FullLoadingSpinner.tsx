import IcoLoading from '@/components/svg/ico_loading';

const FullLoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-20 flex items-center justify-center">
      <IcoLoading />
      <span className="sr-only">로딩중...</span>
    </div>
  );
};

export default FullLoadingSpinner;
