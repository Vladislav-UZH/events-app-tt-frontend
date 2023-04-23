const { createPortal } = require('react-dom');
const { StyledModal, Overlay } = require('./Modal.styled');

const modalRoot = document.querySelector('#modal-root');
const Modal = ({ children }) => {
  return createPortal(
    <Overlay>
      <StyledModal>{children}</StyledModal>
    </Overlay>,
    modalRoot
  );
};
export { Modal };
