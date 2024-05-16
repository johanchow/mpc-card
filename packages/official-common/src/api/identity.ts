import { ajax } from './ajax';
import type { IdentityState } from '../store/identity';

const noticeSendVerifyCode = async (data: Record<string, string>): Promise<boolean> => {
  console.log('start verify code: ', data);
  await ajax({
    url: '//api.onlycoin.cc/SendEmail',
    method: 'POST',
    data: {
      email: data.email,
    }
  });
  return true;
};

const postLogin = async (data: Record<string, string>): Promise<IdentityState['identity']> => {
  const identity = await ajax<IdentityState['identity']>({
    url: '//api.onlycoin.cc/user_login',
    method: 'POST',
    data: {
      email: data.email,
      code: data.code,
    }
  });
  return identity;
};

const postRegister = async (data: Record<string, string>): Promise<IdentityState['identity']> => {
  const identity = await ajax<IdentityState['identity']>({
    url: '//api.onlycoin.cc/user_login',
    method: 'POST',
    data: {
      email: data.email,
      code: data.code,
    }
  });
  return identity;
};

const getIdentityInfo = async (token: string, id: string, email: string): Promise<IdentityState['identity']> => {
  const identity = await ajax<IdentityState['identity']>({
    url: '//api.onlycoin.cc/pay/UserInfo',
    method: 'POST',
    headers: {
      token,
      uid: id,
      encrypt: 1,
    },
    data: {
      email,
    }
  });
  return identity;
};

export {
  getIdentityInfo,
  noticeSendVerifyCode,
  postLogin,
  postRegister,
};
