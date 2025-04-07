// src/components/TransactionForm.js
import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('despesa');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    const newTransaction = {
      description,
      amount: parseFloat(amount),
      type
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setType('despesa');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Transação</h2>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Ex: Compra de insumos"
        />
      </div>
      <div>
        <label>Valor:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ex: 1000"
        />
      </div>
      <div>
        <label>Tipo:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
      </div>
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TransactionForm;
