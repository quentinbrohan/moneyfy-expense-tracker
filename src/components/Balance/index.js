import React, { useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalState';
import './balance.scss';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amountsTotal = transactions?.reduce((total, { amount }) => total + amount, 0);

  return (
    <div className="balance">
      <h4>Votre solde</h4>
      <div className="balance-total">{amountsTotal} €</div>
    </div>
  );
};

export default Balance;
