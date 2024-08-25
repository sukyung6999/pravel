import ModalBackdrop from './ModalBackdrop';
import ModalHeader from './ModalHeader';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, title }: Props) => {
  return (
    <>
      <ModalBackdrop />
      <dialog
        className="modal-open absolute top-[10%] w-full h-[90%] block rounded-2xl z-20"
        open
      >
        <ModalHeader title={title} />
        {children}
      </dialog>
    </>
  );
};

export default Modal;
