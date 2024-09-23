'use client';

import FullLoadingSpinner from '@/components/common/loading/FullLoadingSpinner';
import { useFetchDetail } from '@/hook/useDetail';
import { useAddLocation } from '@/hook/useLocation';
import useModal, { MODAL } from '@/hook/useModal';

import ButtonBox from '../util/ButtonBox';

import ImageBox from './box/ImageBox';
import InfoBox from './box/InfoBox';
import MenuBox from './box/MenuBox';
import ReviewBox from './box/ReviewBox';
import ShareLink from './modal/ShareLink';

interface DetailProps {
  tab: string;
  detailId: string;
}

const Detail = ({ tab, detailId }: DetailProps) => {
  const [modalState, { openModal, closeModal }] = useModal({
    [MODAL.SHARE_LINK]: false,
  });

  const { data, isLoading } = useFetchDetail({ tab, id: detailId });

  const addLocation = useAddLocation();

  if (isLoading || data === undefined) return <FullLoadingSpinner />;

  const handleAddLocation = () => {
    addLocation.mutate({
      id: Number(data.contentId),
      date: '',
      category: data.category,
      thumbnail: data.thumbnail,
      name: data.title,
      description: data.description,
    });
  };

  return (
    <>
      <ImageBox
        thumbnail={data.thumbnail}
        setShareLinkOpen={() => openModal(MODAL.SHARE_LINK)}
      />
      <InfoBox info={data} />
      <MenuBox tab={tab} id={data.contentId} />
      <ReviewBox />
      <ButtonBox like={false} onAddLocation={handleAddLocation} />
      <ShareLink
        shareLinkOpen={modalState[MODAL.SHARE_LINK]}
        setShareLinkClose={() => closeModal(MODAL.SHARE_LINK)}
      />
    </>
  );
};

export default Detail;
