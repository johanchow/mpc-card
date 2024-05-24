import AutoScroll from './component/AutoScroll';
import m from './component/Message';
import Modal from './component/Modal';
import { useIdentityStore } from './store/identity';
import { useWalletStore } from './store/wallet';
import useFetchWalletAddress from './hook/useFetchWalletAddress';
import useRefreshIdentity from './hook/useRefreshIdentity';
import { noticeSendVerifyCode, postLogin, postRegister } from './api/identity';
import { queryTokenExchangeRate, TokenId } from './api/token';
import { formatMoney } from './util/formatter';
import { loadScript } from './util/resource';

export {
  AutoScroll,
  formatMoney,
  loadScript,
  m,
  Modal,
  noticeSendVerifyCode,
  postLogin,
  postRegister,
  queryTokenExchangeRate,
  TokenId,
  useFetchWalletAddress,
  useIdentityStore,
  useWalletStore,
  useRefreshIdentity,
};
