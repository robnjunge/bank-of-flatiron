import React, { useState, useEffect } from 'react';
import NewTransactions from '../components/NewTransactions';
import TransactionList from '../components/TransactionList';


function Home() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8001/transactions?q=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setAllTransactions(data);
      })
      .catch(error => console.error(error));
  }, [searchQuery]);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  async function handleDeleteTransaction(transactionId) {
    try {
      await fetch(`http://localhost:8001/transactions/${transactionId}`, {
        method: 'DELETE',
      });

      setAllTransactions(prevTransactions =>
        prevTransactions.filter(transaction => transaction.id !== transactionId)
      );
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  }

  return (
    <div>
      <h1 className="welcome-header">Welcome to The Bank of Flatiron</h1>
      <div>
        <input
          id="input"
          type="text"
          placeholder="Search Here..."
          onChange={handleSearch}
        />
        <button id="searchButton">Search</button>
      </div>
      <TransactionList
        transactions={allTransactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
      <NewTransactions />
    </div>
  );
}

export default Home;
