import AutoScroll from './component/AutoScroll';
import IdentityRefresher from './component/IdentityRefresher';
import m from './component/Message';
import Modal from './component/Modal';
import { useIdentityStore } from './store/identity';
import { noticeSendVerifyCode, postLogin, postRegister } from './api/identity';
import { queryTokenExchangeRate, TokenId } from './api/token';
import { formatMoney } from './util/formatter';

export {
  AutoScroll,
  formatMoney,
  IdentityRefresher,
  m,
  Modal,
  noticeSendVerifyCode,
  postLogin,
  postRegister,
  queryTokenExchangeRate,
  TokenId,
  useIdentityStore,
};
