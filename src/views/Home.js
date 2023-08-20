import React, { useState, useEffect } from 'react';
import TransactionList from './components/TransactionList'; // Relative path to TransactionList

function Home() {
  const [isTransactions, setIsTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8001/transactions?q=${searchQuery}`)
      .then(response => response.json())
      .then(data => setIsTransactions(data));
  }, [searchQuery]);

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="body">
      <div className="navbar">
        <h1 style={{ color: "rebeccapurple" }}>
          Welcome to your trusted bank of FlatIron
        </h1>
        <input id="input" type="text" placeholder="Search Here..." onChange={handleSearch} />
        <button type="button" id="searchButton">Search</button>
      </div>
      <TransactionList allTransactions={isTransactions} />
    </div>
  );
}

export default Home;
