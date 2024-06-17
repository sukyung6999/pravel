'use client';
import styled from '../../page.module.css';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalWrapper = ({children}: {children: React.ReactNode}) => {
  let [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("modal"));
  }, []);

  return (
      <>
        {portalElement
          ? createPortal(<div className={styled.modal_full}>
            {children}
          </div>, portalElement)
          : null}
      </>
  );
};
export default ModalWrapper;
