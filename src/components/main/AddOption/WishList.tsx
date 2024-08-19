import HeaderModal from '@/layout/header/HeaderModal';

interface WishListProps {
  closeWishList: () => void;
  closeModals: () => void;
}
const WishList = ({ closeWishList, closeModals }: WishListProps) => {
  return (
    <div className="modal-content absolute bottom-0 left-0 w-full mb-[28px] pt-[10px] pb-[41px] z-20 bg-white animate-modalUp">
      <HeaderModal
        title="위시리스트"
        onClose={closeModals}
        hasPrev={{ onClick: closeWishList }}
      />
      <ul>
        <li>
          <button>All</button>
        </li>
        <li>
          <button>맛집</button>
        </li>
        <li>
          <button>관광</button>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default WishList;
