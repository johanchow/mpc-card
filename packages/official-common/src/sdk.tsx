import AutoScroll from './component/AutoScroll';
import { useIdentityStore } from './store/identity';
import { noticeSendVerifyCode, postLogin, postRegister } from './api/identity';

export {
  AutoScroll,
  noticeSendVerifyCode,
  postLogin,
  postRegister,
  useIdentityStore,
};

