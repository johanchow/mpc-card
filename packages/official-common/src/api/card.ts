import { ajaxOnlyCoin, defaultErrorMsg } from './ajax';
import m from '../component/Message';
import CustomError from '../util/custom-error';
import type { WalletState } from '../store/wallet';

const getWalletAddress = async (token: string, id: string): Promise<WalletState['address'] | undefined> => {
  let resp;
  try {
    resp = await ajaxOnlyCoin<Record<string, string>>({
      url: '//api.onlycoin.cc/pay/user_wallet_addr',
      method: 'POST',
			headers: {
				uid: id,
				token,
				encrypt: 1
			},
      data: {
				uid: id,
      }
    });
  } catch (e) {
    const errorMgs = e instanceof CustomError ? e.message : defaultErrorMsg;
    console.error('user_wallet_addr请求异常: ', JSON.stringify(e));
    m.error(errorMgs);
    return undefined;
  }
	return {
		eth: resp.eth,
		sol: resp.sol,
		bsc: resp.bsc,
		ok: resp.ok,
		trx: resp.trx,
	};
};

export {
	getWalletAddress
};
