import AutoScroll from './component/AutoScroll';
import IdentityRefresher from './component/IdentityRefresher';
import m from './component/Message';
import { useIdentityStore } from './store/identity';
import { noticeSendVerifyCode, postLogin, postRegister } from './api/identity';

export {
  AutoScroll,
  IdentityRefresher,
  m,
  noticeSendVerifyCode,
  postLogin,
  postRegister,
  useIdentityStore,
};

