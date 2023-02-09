import React, { useEffect, useCallback } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ closeModal, children }) => {
  const handleOverlayClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      closeModal();
    }
  };

  const handleEscPressed = useCallback(
    event => {
      if (event.key === 'Escape') {
        console.log('Escape pressed');
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    // console.log('Add listener');
    window.addEventListener('keydown', handleEscPressed);
    return () => {
      // console.log('Del listener');
      window.removeEventListener('keydown', handleEscPressed);
    };
  }, [handleEscPressed]);

  return createPortal(
    <div className={s.overlay} onClick={handleOverlayClick}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
