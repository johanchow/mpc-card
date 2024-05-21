import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import Modal, { ModalProps } from "./Modal";
import './Modal.scss';

type Instance = {
  inited: boolean;
  initedModalProps?: ModalProps;
  add: (modalInfo: ModalProps) => void;
  remove: () => void;
};
const instance: Instance = {
  inited: false,
  add: () => {},
  remove: () => {},
};
const show = (modalInfo: ModalProps) => {
  const ins = {
    close: () => {
      instance.remove();
    },
  };
  if (instance.inited) {
    instance.add(modalInfo);
    return ins;
  }
  instance.initedModalProps = modalInfo;
  startRender();
  return ins;
};

const startRender = () => {
  instance.inited = true;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = ReactDOM.createRoot(div);
  root.render(
    <ModalList instance={instance} />
  );
};

const ModalList: React.FC<{
  instance: Instance;
}> = (props) => {
  const { instance } = props;
  console.log('instantce: ', instance);
  const [modalPropsList, setModalPropsList] = useState<ModalProps[]>(
    instance.initedModalProps ? [instance.initedModalProps] : []
  );
  useEffect(() => {
    instance.add = (modalInfo: ModalProps) => {
      setModalPropsList([...modalPropsList, modalInfo]);
    };
    instance.remove = () => {
      // 先默认都是关最后modal。如果要精准控制，可以通过index来区分
      setModalPropsList(modalPropsList.slice(0, -1));
    };
  }, []);
  return <>
    { modalPropsList.length > 0 ? <div className="modal-mask"></div> : <></> }
    { modalPropsList.map((modalProp) => {
      const onClose = () => {
        setModalPropsList(modalPropsList.slice(0, -1));
        modalProp.onClose?.();
      };
      return <Modal key={modalProp.content?.toString()} {...modalProp} onClose={onClose} />
    })}
  </>;
};

const M = {
  show,
};
export default M;
