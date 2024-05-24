import { ajaxOnlyCoin, defaultErrorMsg } from './ajax';
import m from '../component/Message';
import type { IdentityState } from '../store/identity';
import CustomError from '../util/custom-error';

const noticeSendVerifyCode = async (data: Record<string, string>): Promise<boolean> => {
  console.log('开始请求发送验证码: ', data);
  let resp;
  try {
    resp = await ajaxOnlyCoin({
      url: '//api.onlycoin.cc/SendEmail',
      method: 'POST',
      data: {
        email: data.email,
      }
    });
  } catch (e) {
    console.error('验证码请求异常: ', JSON.stringify(e));
    console.log('e instanceof CustomError: ', e instanceof CustomError);
    const errorMgs = e instanceof CustomError ? e.message : defaultErrorMsg;
    m.error(errorMgs);
    return false;
  }
  console.log('完成请求发送验证码: ', resp);
  return true;
};

const postLogin = async (data: Record<string, string>): Promise<IdentityState['identity']> => {
  console.log('开始发送登录: ', data);
  let resp;
  try {
    resp = await ajaxOnlyCoin<Record<string, string>>({
      url: '//api.onlycoin.cc/user_login',
      method: 'POST',
      data: {
        email: data.email,
        code: data.code,
      }
    });
  } catch (e) {
    console.error('登录请求异常: ', JSON.stringify(e));
    const errorMgs = e instanceof CustomError ? e.message : defaultErrorMsg;
    m.error(errorMgs);
    return;
  }
  console.log('收到登录响应: ', resp);
  const identity: IdentityState['identity'] = {
    id: resp.Id,
    token: resp.Token,
    email: resp.Email,
    firstName: resp.FirstName,
    lastName: resp.LastName,
  };
  m.success('登录成功');
  return identity;
};

const postRegister = async (data: Record<string, string>): Promise<IdentityState['identity']> => {
  console.log('开始发送注册: ', data);
  let resp: Record<string, string>;
  try {
    resp = await ajaxOnlyCoin<Record<string, string>>({
      url: '//api.onlycoin.cc/user_login',
      method: 'POST',
      data: {
        email: data.email,
        code: data.code,
      }
    });
  } catch (e) {
    const errorMgs = e instanceof CustomError ? e.message : defaultErrorMsg;
    console.error('注册请求异常: ', JSON.stringify(e));
    m.error(errorMgs);
    return;
  }
  console.log('收到注册响应: ', resp);
  const identity: IdentityState['identity'] = {
    id: resp.Id,
    token: resp.Token,
    email: resp.Email,
    firstName: resp.FirstName,
    lastName: resp.LastName,
  };
  m.success('注册成功');
  return identity;
};

const getIdentityInfo = async (token: string, id: string, email: string): Promise<IdentityState['identity']> => {
  console.log(`开始请求获取用户信息: token=${token}, email=${email}`);
  const identity = await ajaxOnlyCoin<IdentityState['identity']>({
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
  console.log(`收到请求获取用户信息响应: identity=${identity}`);
  return identity;
};

export {
  getIdentityInfo,
  noticeSendVerifyCode,
  postLogin,
  postRegister,
};
