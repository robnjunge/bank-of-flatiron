import React, { useState, useEffect } from 'react';
import NewTransactions from '../components/NewTransactions';
import TransactionList from '../components/TransactionList'


function Home() {
  const [allTransactions, setAllTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  useEffect(() => {
    fetch(`http://localhost:8001/transactions?q=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setAllTransactions(data)})
      .catch(error => console.error(error));
  }, [searchQuery]);

  function handleSearch (e) {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <div>
      <input id = 'input' type="text" placeholder='Search Here...' onChange={handleSearch}/>
        <button id = 'searchButton'>Search</button>
      </div>
      <TransactionList transactions={allTransactions} />
      <NewTransactions/>
    </div>
  );
}

export default Home;
