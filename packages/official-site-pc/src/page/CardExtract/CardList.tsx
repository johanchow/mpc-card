import React from "react";
import './CardList.scss';
import cardChipImage from './image/card-chip.png';

const cards = [{
  id: 1,
  no: '4033 1234 5678 9012',
  overdue: '03/26',
  balance: 90,
  user: 'John Doe',
}, {
  id: 2,
  no: '4033 1234 5678 9016',
  overdue: '03/25',
  balance: 90,
  user: 'John Doe',
}, {
  id: 3,
  no: '4033 1234 5678 9016',
  overdue: '09/23',
  balance: 90,
  user: 'John Doe',
}, {
  id: 4,
  no: '8932 1234 5678 9016',
  overdue: '08/27',
  user: 'John Doe',
}, {
  id: 5,
  no: '4033 1234 5678 9900',
  overdue: '03/25',
  user: 'John Doe',
}, {
  id: 6,
  no: '4033 1234 5678 9016',
  overdue: '03/25',
  user: 'John Doe',
}];
type CardListProps = {
	onSelect: () => void;
};
const CardList: React.FC<CardListProps> = () => {
	return (
		<div className="card-list">
      {cards.map(card => {
        return <>
          <div key={card.id} className="card-item">
            <div className="card-balance">
              <span className="card-value">{card.balance}</span>
              <span className="card-value">USD</span>
            </div>
            <div className="card-chip">
              <img alt='' src={cardChipImage} />
            </div>
            <div className="card-number">
              <div className="card-value">{showCardNumber(card.no)}</div>
              <span className="card-label">413</span>
            </div>
            <div className="card-holding">
              <div className="holder">
                <span className="card-label">Cardholder</span>
                <span className="card-value">{card.user}</span>
              </div>
              <div className="overdue">
                <span className="card-label">Overdue</span>
                <span className="card-value">{card.overdue}</span>
              </div>
            </div>
          </div>
        </>
      })}
    </div>
	);
};

const showCardNumber = (no: string): React.ReactNode => {
  return <>
    <span>4966</span>
    <span>9500</span>
    <span>1792</span>
    <span>1223</span>
  </>;
};


export default CardList;
