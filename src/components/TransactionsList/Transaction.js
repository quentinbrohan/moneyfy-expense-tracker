import React, { useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalState';
import PropTypes from 'prop-types';


const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  const color = transaction.amount < 0 ? 'transaction-minus' : 'transaction-plus';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.name} <span className={color}>{sign}{Math.abs(transaction.amount)} €</span>
      <button
        className="delete"
        type="button"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Transaction;
