/* eslint-disable block-scoped-var */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalState';
import './addTransaction.scss';


const AddTransaction = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const { transactions } = useContext(GlobalContext);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (transactions.length === 0) {
      var newId = 1;
    }
    else {
      const allTransactionsIds = transactions.map((transaction) => transaction.id);
      var newId = Math.max(...allTransactionsIds) + 1;
    }

    const newTransaction = {
      id: newId,
      name,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setName('');
    setAmount(0);
    document.querySelector('#name').focus();
  };

  return (
    <>
      <h3>Ajouter une transaction</h3>
      <form onSubmit={handleSubmit} id="form">
        <div className="form-group">
          <label htmlFor="text">Nom</label>
          <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} id="name" placeholder="Nom de la transaction" required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Montant</label>
          <input type="number" value={amount} onChange={(evt) => setAmount(evt.target.value)} id="amount" placeholder="Montant" required />
          <div>Négatif: dépense | Positif: revenu.</div>
        </div>
        <button type="submit">Ajouter la transaction</button>
      </form>
    </>
  );
};


export default AddTransaction;
