import { useState } from 'react';

interface ModalState {
  [key: string]: boolean;
}

type ModalActions = {
  openModal: (modalName: string) => void;
  closeModal: (modalName: string) => void;
  toggleModal: (modalName: string) => void;
  closeAllModals: () => void;
};

const useModal = (initState: ModalState = {}): [ModalState, ModalActions] => {
  const [modalState, setModalState] = useState<ModalState>(initState);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (!target.closest('.modal-content')) {
      closeAllModals();
    }
  };

  const openModal = (modal: string) => {
    setModalState((prevState) => ({ ...prevState, [modal]: true }));

    // 모달을 열 때 클릭 외부 이벤트 리스너를 등록
    document.addEventListener('click', handleClickOutside);
  };

  const closeModal = (modal: string) => {
    setModalState((prevState) => ({ ...prevState, [modal]: false }));

    // 모든 모달이 닫히면 클릭 외부 이벤트 리스너를 제거
    if (!Object.values(modalState).some((isOpen) => isOpen)) {
      document.removeEventListener('click', handleClickOutside);
    }
  };

  const toggleModal = (modal: string) => {
    const isOpen = modalState[modal];

    setModalState((prevState) => ({
      ...prevState,
      [modal]: !isOpen,
    }));

    // 모달을 토글할 때 상태에 따라 이벤트 리스너 등록/제거
    if (!isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else if (!Object.values(modalState).some((open) => open)) {
      document.removeEventListener('click', handleClickOutside);
    }
  };

  const closeAllModals = () => {
    setModalState((prevState) => {
      const newState = { ...prevState };

      Object.keys(newState).forEach((modal) => {
        newState[modal] = false;
      });
      return newState;
    });

    // 모든 모달을 닫으므로 이벤트 리스너 제거
    document.removeEventListener('click', handleClickOutside);
  };

  return [modalState, { openModal, closeModal, toggleModal, closeAllModals }];
};

export default useModal;
