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
    throw new CustomError({
      code: data.msgId,
      message: getTextOfMsgId(data.msgId),
      data: data.data,
    });
  }
  return data.data;
};

export type {
  AjaxResp,
};
export {
  ajax,
  getTextOfMsgId,
};
