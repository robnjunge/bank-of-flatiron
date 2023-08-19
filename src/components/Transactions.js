import React from "react";

function Transactions({ date, description, category, amount }) {


  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button type="button"  >Delete</button>
      </td>
    </tr>
  );
}

export default Transactions;