import React, { useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalState';
import './incomeExpenses.scss';


const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts.length > 0 && amounts.filter((amount) => amount > 0).length > 0
    ? amounts.filter((amount) => amount > 0).reduce((acc, amount) => acc + amount).toFixed(2)
    : 0.00;


  const expense = amounts.length > 0 && amounts.filter((amount) => amount < 0).length > 0
    ? (
      amounts.filter((amount) => amount < 0).reduce((acc, amount) => acc + amount) * -1)
      .toFixed(2)
    : 0.00;


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
