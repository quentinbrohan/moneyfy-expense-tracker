/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { GlobalContext } from 'src/context/GlobalState';
import './saveTransaction.scss';

const initialFormValues = {
  name: '',
  amount: 0,
  date: '',
};

const SaveTransaction = () => {
  const { transactions } = useContext(GlobalContext);
  const { saveTransaction } = useContext(GlobalContext);

  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const onChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValues.amount === 0) {
      return setError('Le montant ne peut être nul.');
    }

    const lastTransaction = transactions.sort((a, b) => b.id - a.id)[0]?.id || 0;

    const transaction = {
      id: lastTransaction + 1,
      name: formValues.name.trim(),
      amount: +formValues.amount,
      date: formValues.date,
    };

    saveTransaction(transaction);
    setFormValues(initialFormValues);

    document.querySelector('#name').focus();
  };

  return (
    <>
      <h3>Ajouter une transaction</h3>
      <form onSubmit={handleSubmit} id="form">
        <div className="form-group">
          <label htmlFor="text">Nom</label>
          <input
            type="text"
            value={formValues.name}
            onChange={onChange}
            id="name"
            placeholder="Nom de la transaction"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Montant</label>
          <input
            className={
              // eslint-disable-next-line no-nested-ternary
              formValues.amount === null || formValues.amount === 0
                ? 'neutral'
                : formValues.amount > 0
                  ? 'positive'
                  : 'negative'
            }
            type="number"
            value={formValues.amount}
            onChange={onChange}
            id="amount"
            placeholder="Montant"
            required
          />
          <div>Négatif: dépense | Positif: revenu.</div>
          {error && <div className="error">{error}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={formValues.date}
            onChange={onChange}
            id="date"
            placeholder="Date de la transaction"
            required
          />
        </div>
        <button type="submit">Ajouter la transaction
        </button>
      </form>
    </>
  );
};

export default SaveTransaction;
