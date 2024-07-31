import InfoBox from '@/components/search/detail/InfoBox';
import ReviewBox from '@/components/search/detail/ReviewBox';
import TalkBox from '@/components/search/detail/TalkBox';
import UtilBox from '@/components/search/detail/UtilBox';

const DetailContent = () => {
  return (
    <div className="pb-[92px]">
      <div className="relative">
        <img src="/img_dummy.png" alt="" className="object-cover bg-gray-700" />
        <button
          type="button"
          className="absolute bottom-[16px] right-[16px] w-[32px] h-[32px] p-[4px] bg-[#1A1E27B2] box-border rounded-full leading-[22px]"
        >
          <span className="ico_pravel ico_share24">공유하기</span>
        </button>
      </div>
      <InfoBox />
      <ReviewBox />
      <TalkBox />
      <UtilBox />
    </div>
  );
};

export default DetailContent;
