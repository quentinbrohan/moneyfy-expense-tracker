import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [],
  // [
  //   { id: 1, name: 'Restaurant - Fondue et Irish Coffee', amount: -35 },
  //   { id: 2, name: 'Création site web', amount: 300 },
  //   { id: 3, name: 'Livre - The Doors of Perception, Aldous Huxley', amount: -10 },
  //   { id: 4, name: 'Polaroïd', amount: 120 },
  // ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
