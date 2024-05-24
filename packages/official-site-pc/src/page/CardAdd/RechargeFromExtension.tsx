import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { formatMoney, queryTokenExchangeRate } from 'official-common';
import './Recharge.scss';
import chooseTokenImage from './image/choose-token.png';
import { TokenName, supportedTokens } from './common';

const Recharge = () => {
  const [usd, setUsd] = useState<number | undefined>();
  const [tokenName, setTokenName] = useState<TokenName>(TokenName.ETH);
  const [tokenChoosing, setTokenChoosing] = useState<boolean>(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const inputAmount = watch("amount");
  const onSubmit = (data: any) => {
  };
  
  // 当inputAmount变化时，重新计算usd
  useEffect(() => {
    const tokenId = supportedTokens.find(item => item.name === tokenName)?.id;
    if (!inputAmount || !tokenName || !tokenId) return;
    queryTokenExchangeRate([tokenId], 'usd').then((result: Record<string, number>) => {
      const rate = result[tokenId];
      const usd = rate ? rate * inputAmount : undefined;
      setUsd(usd);
    });
  }, [inputAmount, tokenName]);
  const onSelectToken = (tokenName: TokenName) => {
    setTokenChoosing(false);
    setTokenName(tokenName);
  };
  const tokenImage = supportedTokens.find(item => item.name === tokenName)?.img;
  return <div className="recharge-dialog flex-col-stretch">
    <div className="recharge-title">Please complete your first Recharge.</div>
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col-stretch">
      <div className="recharge-form-body">
        <div className="flex-row-btw field-label">
          <span>Recharge amount</span>
          <div className="qr-code"></div>
        </div>
        <div className="flex-row-btw field-input">
          <input type="text" {...register("amount", { required: true, min: 20 })} autoComplete="off" />
          <div className="recharge-token-choose" onClick={() => setTokenChoosing(true)}>
            <img className="choose-token-img" alt='' src={tokenImage} />
            <span>{tokenName}</span>
            <img className="choose-icon" alt='' src={chooseTokenImage} />
          </div>
        </div>
        {errors?.amount?.type === "required" && <p className="error-message">Please input currencies number</p>}
        {errors?.amount?.type === "min" && <p className="error-message">{'The number of currencies >= 20'}</p>}
        <div className="evaluate-money">
          {
            usd ? <span>≈{formatMoney(usd)} USD</span> : <></>
          }  
        </div>
      </div>
      <input type="submit" value="Confirm" />
      {
        tokenChoosing ? <TokenSelect selectedName={tokenName} onSelect={onSelectToken} /> : <></>
      }
    </form>
  </div>
};

const TokenSelect: React.FC<{
  selectedName: TokenName;
  onSelect: (name: TokenName) => void
}> = (props) => {
  const { selectedName, onSelect } = props;
  const handleClick = (name: TokenName) => {
    onSelect(name);
  };
  return <div className="token-list">
    {supportedTokens.map((item) => {
      return (
        <div key={item.name} onClick={() => handleClick(item.name)}
          className={`token-option ${selectedName === item.name ? 'active' : ''}`}>
          <img alt='' src={item.img} />
          <span>{item.name}</span>
        </div>)
    })}
  </div>
};

export default Recharge;
