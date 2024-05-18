import axios, { AxiosRequestConfig } from 'axios';
import CustomError from '../util/custom-error';

type AjaxResp<T = Record<string, any>> = {
  code: number;
  msgId: number;
  data: T;
};

const msgIdToText: Record<number, string> = {
  4030: '无效邮箱',
};
const getTextOfMsgId = (msgId: number) => {
  return msgIdToText[msgId];
};

const ajax = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const resp = await axios.request(config);
  const data = resp.data as AjaxResp<T>;
  if (data.msgId !== 2000) {
    console.error(`接口报错: ${data.msgId}`);
    throw new CustomError({
      code: data.msgId,
      message: getTextOfMsgId(data.msgId) || `${data.msgId}`,
      data: data.data,
    });
  }
  return data.data;
};

// const ajax = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
//   if (config.url?.includes('user_login')) {
//     return {
//       "Id": 772214432075776,
//       "IdStr": "",
//       "Token": "7046af6d71e9fdcda4f24da3396edd6e16a4fbc5",
//       "Trx": "",
//       "Balance": "",
//       "Email": "1301511624a@gmail.com",
//       "LastName": "zz",
//       "FirstName": "xx",
//     } as T;
//   } else if (config.url?.includes('UserInfo')) {
//     return {
//       "id": 772214432075776,
//       "token": "43e30645dfcdfc17b089ef65abac648a4cb84e3b",
//       "tgName": "",
//       "lastName": "zz",
//       "firstName": "xx",
//       "email": "1301511624a@gmail.com",
//     } as T; 
//   } else if (config.url?.includes('SendEmail')) {
//     return {
//     } as T;
//   }
//   return undefined as T;
// }

export type {
  AjaxResp,
};
export {
  ajax,
};
