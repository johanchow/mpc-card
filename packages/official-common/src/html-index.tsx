import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client';
import Modal from './component/Modal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const App = () => {
  useEffect(() => {
    Modal.show({
      content: <div>content</div>,
    });
  }, []);
  return <>App</>;
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
