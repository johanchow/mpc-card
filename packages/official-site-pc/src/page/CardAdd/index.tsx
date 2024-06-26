import React, { useState } from "react";
import GetCardButton from "../../component/GetCardButton";
import { Modal } from 'official-common';
import RechargeFromExtension from "./RechargeFromExtension";
import RechargeFromQrcode from "./RechargeFromQrcode";
import './AddCard.scss';
import visaImage from './image/visa.png';
import mastercardImage from './image/mastercard.png';

enum CardType {
  Visa = 'visa',
  MasterCard = 'mastercard',
}
const AddCard: React.FC = () => {
  const [cardType, setCardType] = useState<CardType>(CardType.Visa);
  const [detailOpen, setDetailOpen] = useState<boolean>(false);
  return <div className="card-open">
    <div className="card-info">
      <div className="card-choose">
        <div className="card-template">
          <div className={`card-type-logo ${cardType === CardType.Visa ? 'visa' : 'mastercard'}`} />
        </div>
        <div className="choose-switch">
          <img alt='' src={visaImage} className={`button visa ${cardType === CardType.Visa ? 'active' : ''}`}
            onClick={() => setCardType(CardType.Visa)} />
          <img alt='' src={mastercardImage} className={`button mastercard ${cardType === CardType.MasterCard ? 'active' : ''}`}
            onClick={() => setCardType(CardType.MasterCard)} />
        </div>
      </div>
      <div className="card-instruction">
        <div className="card-instruction-icon" onClick={() => setDetailOpen(true)}></div>
        <div className="card-instruction-summary"></div>
        {
          detailOpen ?
            <div className="instruction-detail">
              <div className="close-icon" onClick={() => setDetailOpen(false)}></div>
            </div> :
            <></>
        }
      </div>
    </div>
    <GetCardButton onClick={() => Modal.show({
      content: <RechargeFromQrcode />,
      styles: {
        width: `${680/16}rem`,
        boxSizing: 'border-box',
        padding: `${30/16}rem`,
        background: '#EDEDED',
        borderRadius: `${20/16}rem`,
      }
    })} />
  </div>
};

export default AddCard;
