import AutoScroll from './component/AutoScroll';
import IdentityRefresher from './component/IdentityRefresher';
import m from './component/Message';
import Modal from './component/Modal';
import { useIdentityStore } from './store/identity';
import { noticeSendVerifyCode, postLogin, postRegister } from './api/identity';

export {
  AutoScroll,
  IdentityRefresher,
  m,
  Modal,
  noticeSendVerifyCode,
  postLogin,
  postRegister,
  useIdentityStore,
};

