import React, { useState } from "react";
import GetCardButton from "../../component/GetCardButton";
import './AddCard.scss';

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
          <div className={`button visa ${cardType === CardType.Visa ? 'active' : ''}`}
            onClick={() => setCardType(CardType.Visa)}></div>
          <div className={`button mastercard ${cardType === CardType.MasterCard ? 'active' : ''}`}
            onClick={() => setCardType(CardType.MasterCard)}></div>
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
    <GetCardButton />
  </div>
};

export default AddCard;
