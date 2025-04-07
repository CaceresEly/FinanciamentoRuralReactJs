import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Lista de Transações</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <strong>{transaction.description}</strong>: R$ {transaction.amount.toFixed(2)} ({transaction.type})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
