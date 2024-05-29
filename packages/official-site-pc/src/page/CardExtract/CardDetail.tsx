import React, { useContext } from "react";
import { CardContext } from "./common";
import { formatMoney } from "official-common";
import './CardDetail.scss';

const transactionList = [{
	id: 'aadaffd2vd2v',
	state: 'Success',
	amount: 90,
	date: '2021-09-23 15:00:00',
}, {
	id: 'aadaffd2vd2v',
	state: 'Success',
	amount: 90,
	date: '2021-09-23 18:00:00',
}];
const CardDetail = () => {
	const currentCardId = useContext(CardContext);
	return (
		<div className="card-detail">
			<div className="tab">
				<div className="tab-item active">Trade</div>
				<div className="tab-item">Recharge</div>
			</div>
			<div className="filter-input">
				<input type="text" placeholder="Filter status..." />
			</div>
			<div className="transaction-table">
				<div className="transaction-table-header">
					<div className="id-column-header">ID</div>
					<div className="state-column-header">State</div>
					<div className="amount-column-header">Amount</div>
					<div className="date-column-header">Date</div>
				</div>
				<div className="transaction-table-body">
					{transactionList.map(transaction => {
						return <div key={transaction.id} className="transaction-item">
							<div className="id-column-data">{transaction.id}</div>
							<div className="state-column-data"></div>
							<div className="amount-column-data">
								<span>{formatMoney(transaction.amount)}</span>
								<span>USD</span>
							</div>
							<div className="date-column-data">
								{showTransactionTime(transaction.date)}
							</div>
						</div>
					})}
				</div>
			</div>
		</div>
	);
};

const showTransactionTime = (time: string): React.ReactNode  => {
	return <></>;
};

export default CardDetail;
