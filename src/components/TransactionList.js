import React from 'react';


function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <table>
        <thead>
         <tr>
          <td>
            Date
          </td>
          <td>
            Description
          </td>
          <td>
            Category
          </td>
          <td>
            Amount
          </td>
        </tr>   
        </thead>
        <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id} className="transaction-item">
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
          
       </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
