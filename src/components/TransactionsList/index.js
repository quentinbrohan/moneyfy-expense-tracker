import React, { useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalState';
import Transaction from './Transaction';
import './transactionsList.scss';


const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>Historique</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction
            transaction={transaction}
            key={transaction.id}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionsList;
