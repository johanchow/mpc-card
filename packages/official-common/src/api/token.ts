import { ajaxCoingecko } from "./ajax";

enum TokenId {
  btc = 'bitcoin',
  eth = 'ethereum',
  sol = 'solana',
  usdc = 'usd-coin',
  usdt = 'tether',
};
const queryTokenExchangeRate = async (
  tokenIds: TokenId[],
  currency: string,
): Promise<Record<string, number>> => {
  const data = await ajaxCoingecko({
    url: '//api.coingecko.com/api/v3/simple/price',
    method: 'GET',
    params: {
      ids: tokenIds.join(','),
      vs_currencies: currency,
    },
  });
  if (!data) {
    return tokenIds.reduce((acc, tokenId) => {
      return { ...acc, [tokenId]: 0 };
    }, {} as Record<string, number>);
  }
  const result: Record<string, number> = {};
  Object.keys(data).forEach((token) => {
    result[token] = data[token][currency];
  });
  return result;
};

export {
  queryTokenExchangeRate,
  TokenId,
}