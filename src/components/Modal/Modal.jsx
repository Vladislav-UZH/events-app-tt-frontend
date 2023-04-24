import { useEffect } from 'react';

const { createPortal } = require('react-dom');
const { StyledModal, Overlay } = require('./Modal.styled');

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ children, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', onCloseByEsc);
    function onCloseByEsc(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }
    return () => window.removeEventListener('keydown', onCloseByEsc);
  }, [onClose]);
  const handleCloseByOverlay = e => {
    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };
  return createPortal(
    <Overlay onClick={handleCloseByOverlay}>
      <StyledModal>{children}</StyledModal>
    </Overlay>,
    modalRoot
  );
};
export { Modal };
