import React, { ReactNode } from "react";
import './Modal.scss'

export type ModalProps = {
  content: ReactNode;
  styles: React.CSSProperties;
  onClose?: () => void;
};

// Modal属性接收css style，并且直接给到.modal-content上
const Modal: React.FC<ModalProps> = (props) => {
  const { content, onClose, styles } = props
  const handleOnClose = () => {
    onClose?.();
  };
  return <div className="modal-wrapper">
    <div className="modal-content" style={ styles }>
      <div className="close-icon" onClick={() => { handleOnClose() }} style={{
        top: styles.paddingTop || styles.padding,
        right: styles.paddingTop || styles.padding,
      }} />
      { content }
    </div>
  </div>;
};

export default Modal;
