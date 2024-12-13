import React, { useEffect, useRef } from 'react'
import { loadScript, useWalletStore } from 'official-common';
import './Recharge.scss';
import { supportedChains } from './common';

const RechargeFromQrcode = () => {
	const [selectedChainId, setSelectedChainId] = React.useState<string>(supportedChains[0].id);
	const { address: chainIdAddressMap } = useWalletStore();
	const qrcodeElement = useRef<HTMLDivElement>(null);
	const chainAddress = chainIdAddressMap[selectedChainId];
	useEffect(() => {
		initQrcode(qrcodeElement.current!, chainAddress);
	}, []);
	useEffect(() => {
		renderQrcode(chainAddress);
	}, [chainAddress]);
	const handleSelectChain = (id: string) => {
		setSelectedChainId(id);
	};
	// 根据接口返回确定支持的链
	const nowSupportedChains = supportedChains.filter(item => Object.keys(chainIdAddressMap).includes(item.id));
  return <div className="recharge-dialog flex-col-stretch">
    <div className="recharge-title">Please use your cryptocurrency wallet or exchange account to scan the QR code, or copy the address information to make a deposit.</div>
		<div className='recharge-qrcode-body'>
			<div className='qrcode-panel'>
				<span className='panel-title'>QR :</span>
				<div ref={qrcodeElement} className='qrcode'></div>
			</div>
			<div className='wallet-panel'>
				<span className='panel-title'>Wallet address :</span>
				<div className='token-list'>{
					nowSupportedChains.map((item) => {
						return (
							<div key={item.name} onClick={() => handleSelectChain(item.id)}
								className={`token-option ${selectedChainId === item.id ? 'active' : ''}`}>
								<img alt='' src={item.img} />
								<span>{item.name}</span>
							</div>)
					})
				}</div>
				<div className='wallet-address'>{chainAddress || '没分配地址'}</div>
			</div>
		</div>
	</div>
};

const p = loadScript('//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/qrcodejs/1.0.0/qrcode.min.js');
const {
	initQrcode,
	renderQrcode
} = (() => {
	let qrcodeInstance: any;
	const initQrcode = (element: HTMLDivElement, chainAddress: string) => {
		p.then(() => {
      // @ts-ignore
			qrcodeInstance = new window.QRCode(element, {
				text: chainAddress,
				width: element.clientWidth,
				height: element.clientHeight,
				colorDark : "#000000",
				colorLight : "#ffffff",
        // @ts-ignore
				correctLevel : window.QRCode.CorrectLevel.H
			});
		});
	};
	const renderQrcode = (chainAddress: string) => {
		if (!qrcodeInstance) return;
		if (!chainAddress) {
			qrcodeInstance.clear();
		} else {
			qrcodeInstance.makeCode(chainAddress);
		}
	};
	return {initQrcode, renderQrcode};
})();


// const renderQrcode = (element: HTMLDivElement, chainAddress: string) => {
// 	p.then(() => {
// 		if (qrcodeInstance) {
// 			if (!chainAddress) {
// 				qrcodeInstance.clear();
// 			} else {
// 				qrcodeInstance.makeCode(chainAddress);
// 			}
// 		} else {
// 			qrcodeInstance = new window.QRCode(element, {
// 				text: chainAddress,
// 				width: element.clientWidth,
// 				height: element.clientHeight,
// 				colorDark : "#000000",
// 				colorLight : "#ffffff",
// 				correctLevel : window.QRCode.CorrectLevel.H
// 			});
// 		}
// 	});
// };

export default RechargeFromQrcode;
