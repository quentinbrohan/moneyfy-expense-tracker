import React, { useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalState';
import './incomeExpenses.scss';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    ?.filter((transaction) => transaction.amount > 0)
    .reduce((inc, { amount }) => inc + amount, 0);

  const expense = transactions
    ?.filter((transaction) => transaction.amount < 0)
    .reduce((exp, { amount }) => exp + amount, 0) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Revenus</h4>
        <p className="money plus">{income} €</p>
      </div>
      <div>
        <h4>Dépenses</h4>
        <p className="money minus">{expense} €</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
