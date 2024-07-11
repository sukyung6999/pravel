'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styled from './ModalWrapper.module.css';

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('modal'));
  }, []);

  return (
    <>
      {portalElement
        ? createPortal(
            <div className="absolute w-full h-[100vh]">
              <div className={styled.modal_full}>{children}</div>
            </div>,
            portalElement,
          )
        : null}
    </>
  );
};

export default ModalWrapper;
