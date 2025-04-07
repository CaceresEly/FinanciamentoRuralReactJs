// src/components/cadastros/DespesasPessoaisForm.js
import React, { useState } from 'react';
import '../styles/cadastrosStyles.css';

function DespesasPessoaisForm() {
  const [categoria, setCategoria] = useState('');
  const [valor, setValor] = useState('');
  const [dataDespesa, setDataDespesa] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Despesa Pessoal:', { categoria, valor, dataDespesa, descricao });
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Despesas Pessoais</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Categoria:</label>
          <input 
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Ex: Alimentação, Transporte, Saúde"
            required
          />
        </div>
        <div className="form-group">
          <label>Valor (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data:</label>
          <input 
            type="date"
            value={dataDespesa}
            onChange={(e) => setDataDespesa(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descrição/Observações:</label>
          <textarea 
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Detalhes da despesa..."
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default DespesasPessoaisForm;
