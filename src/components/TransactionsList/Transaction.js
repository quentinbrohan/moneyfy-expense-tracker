import React, { useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalState';
import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  const color = transaction.amount < 0 ? 'transaction-minus' : 'transaction-plus';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      <span>{transaction.date}</span>
      {transaction.name}{' '}
      <span className={color}>
        {sign}
        {Math.abs(transaction.amount)} €
      </span>
      <div className="cta">
        <button
          className="delete"
          type="button"
          onClick={() => deleteTransaction(transaction.id)}
        >
          🗑
        </button>
      </div>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Transaction;
