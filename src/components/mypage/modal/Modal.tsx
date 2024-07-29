'use client';

import ModalHeader from './ModalHeader';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Modal = ({ children, title }: Props) => {
  return (
    <dialog
      className="w-full h-[90%] block backdrop:bg-black/50 backdrop:backdrop-blur-md"
      open
    >
      <ModalHeader title={title} onClose={() => {}} />
      {children}
    </dialog>
  );
};

export default Modal;
