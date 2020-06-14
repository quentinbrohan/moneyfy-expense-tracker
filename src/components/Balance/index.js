import React, { useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalState';
import './balance.scss';


const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.length > 0 ? amounts.reduce((acc, amount) => acc + amount).toFixed(2) : 0;

  return (
    <div className="balance">
      <h4>Votre solde</h4>
      <div className="balance-total">{total} €</div>
    </div>
  );
};

export default Balance;
