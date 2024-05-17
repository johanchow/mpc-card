import AutoScroll from './component/AutoScroll';
import IdentityRefresher from './component/IdentityRefresher';
import { useIdentityStore } from './store/identity';
import { noticeSendVerifyCode, postLogin, postRegister } from './api/identity';

export {
  AutoScroll,
  IdentityRefresher,
  noticeSendVerifyCode,
  postLogin,
  postRegister,
  useIdentityStore,
};

