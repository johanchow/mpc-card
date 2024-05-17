import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Message, { MessageProp } from "./Message";

type Instance = {
  add: (messageItem: MessageProp) => void;
};
let instance: Instance;
const success = (text: string, duration?: number) => {
  if (instance) {
    instance.add({ type: 'success', text, duration });
    return;
  }
  startRender();
};
const error = (text: string, duration?: number) => {
  if (instance) {
    instance.add({ type: 'error', text, duration });
    return;
  }
  startRender();
};

const startRender = () => {
  instance = { add: () => {} };
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = ReactDOM.createRoot(div);
  root.render(
    <MessageList instance={instance} />
  );
};

const MessageList: React.FC<{ instance: Instance }> = (prop) => {
  const { instance } = prop;
  const [messages, setMessages] = useState<MessageProp[]>([]);
  useEffect(() => {
    if (instance) {
      instance.add = (message) => {
        console.log('add message: ', message);
        setMessages([...messages, message]);
      };
    }
  }, []);
  const handleOnClose = (index: number) => {
    messages.splice(index, 1);
    setMessages([...messages]);
  };
  return <>{messages.map((m, index) => {
    return <Message key={m.text} {...m} onClose={() => handleOnClose(index)} />
  })}
  </>
};

const m = {
  success,
  error,
};
export default m;

