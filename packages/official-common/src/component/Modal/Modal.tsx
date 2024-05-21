import React, { ReactNode } from "react";
import './Modal.scss'

export type ModalProps = {
  content: ReactNode;
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = (props) => {
  const { content, onClose } = props
  const handleOnClose = () => {
    onClose?.();
  };
  return <div className="modal-wrapper">
    <div className="modal-content">
      <div className="close-icon" onClick={() => { handleOnClose() }} />
      { content }
    </div>
  </div>;
};

export default Modal;
