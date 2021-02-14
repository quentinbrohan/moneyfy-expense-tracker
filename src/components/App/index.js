// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Balance from 'src/components/Balance';
import IncomeExpenses from 'src/components/IncomeExpenses';
import TransactionsList from 'src/components/TransactionsList';
import SaveTransaction from 'src/components/SaveTransaction';

import { GlobalProvider } from 'src/context/GlobalState';
import './styles.scss';

// == Composant
const App = () => (
  <GlobalProvider>
    <Header />
    <div className="container">
      <div className="left">
        <Balance />
        <IncomeExpenses />
        <SaveTransaction />
      </div>
      <div className="right">
        <TransactionsList />
      </div>
    </div>
    <Footer />
  </GlobalProvider>
);

// == Export
export default App;
