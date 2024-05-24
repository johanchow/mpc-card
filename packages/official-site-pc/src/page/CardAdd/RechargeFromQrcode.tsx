import React, { useEffect, useRef } from 'react'
import { loadScript, useWalletStore } from 'official-common';
import './Recharge.scss';
import { supportedTokens } from './common';

const RechargeFromQrcode = () => {
	const [selectedChain, setSelectedChain] = React.useState<string>(supportedTokens[0].name);
	const { address: addressMap } = useWalletStore();
	const qrcodeElement = useRef<HTMLDivElement>(null);
	const chainAddress = addressMap[selectedChain.toLowerCase()];
	useEffect(() => {
		renderQrcode(qrcodeElement.current!, chainAddress);
	}, [chainAddress]);
	const handleSelectChain = (name: string) => {
		setSelectedChain(name);
	};
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
					supportedTokens.map((item) => {
						return (
							<div key={item.name} onClick={() => handleSelectChain(item.name)}
								className={`token-option ${selectedChain === item.name ? 'active' : ''}`}>
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
let qrcodeInstance: any;
const renderQrcode = (element: HTMLDivElement, chainAddress: string) => {
	p.then(() => {
		if (qrcodeInstance) {
			if (!chainAddress) {
				qrcodeInstance.clear();
			} else {
				qrcodeInstance.makeCode(chainAddress);
			}
		} else {
			qrcodeInstance = new window.QRCode(element, {
				text: chainAddress,
				width: element.clientWidth,
				height: element.clientHeight,
				colorDark : "#000000",
				colorLight : "#ffffff",
				correctLevel : window.QRCode.CorrectLevel.H
			});
		}
	});
};

export default RechargeFromQrcode;
