// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Balance from 'src/components/Balance';
import IncomeExpenses from 'src/components/IncomeExpenses';
import TransactionsList from 'src/components/TransactionsList';
import AddTransaction from 'src/components/AddTransaction';

import { GlobalProvider } from 'src/context/GlobalState';
// import './styles.css';
import './styles.scss';

// == Composant
const App = () => (
  <GlobalProvider>
    <Header />
    <div className="container">
      <div className="left">
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
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
