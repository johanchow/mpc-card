import ethImage from './image/eth.png';
import usdcImage from './image/usdc.png';
import solImage from './image/solana.png';
import usdtImage from './image/usdt.png';
import btcImage from './image/btc.png';

enum TokenName {
  ETH = 'ETH',
  USDC = 'USDC',
  SOL = 'SOL',
  USDT = 'USDT',
  BTC = 'BTC',
};
const supportedTokens = [{
  id: 'ethereum',
  name: TokenName.ETH,
  img: ethImage,
}, {
  id: 'usd-coin',
  name: TokenName.USDC,
  img: usdcImage,
}, {
  id: 'solana',
  name: TokenName.SOL,
  img: solImage,
}, {
  id: 'tether',
  name: TokenName.USDT,
  img: usdtImage,
}, {
  id: 'bitcoin',
  img: btcImage,
  name: TokenName.BTC,
}];

export {
	TokenName,
	supportedTokens,
};

