import React, { useEffect } from "react"
import './Message.css';
import successSvg from './image/success.svg';
import errorSvg from './image/error.svg';

export type MessageProp = {
  type: 'success' | 'error';
  text: string;
  duration?: number;
  onClose?: () => void;
};
const Message: React.FC<MessageProp> = (props) => {
  const { type, text, duration = 3, onClose } = props;
  useEffect(() => {
    setTimeout(() => {
      console.log('开始消失');
      onClose?.();
    }, duration * 1000);
  }, []);
  return <div className={`message-modal`}>
    {
      type === 'success' ? 
        <img className='type-logo' src={successSvg} alt="Success Logo" /> :
        <img className='type-logo' src={errorSvg} alt="Error Logo"/>
    }
    <span className="message-text">{text}</span>
  </div>;
};

export default Message;
