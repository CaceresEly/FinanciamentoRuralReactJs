// src/components/cadastros/CustosOportunidadeForm.js
import React, { useState } from 'react';
import '../styles/cadastrosStyles.css';

function CustosOportunidadeForm() {
  const [descricao, setDescricao] = useState('');
  const [valorCusto, setValorCusto] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Custos de Oportunidade:', { descricao, valorCusto, periodo, observacoes });
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Custos de Oportunidade</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Descrição:</label>
          <input 
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva o custo"
            required
          />
        </div>
        <div className="form-group">
          <label>Valor do Custo (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={valorCusto}
            onChange={(e) => setValorCusto(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Período de Avaliação:</label>
          <input 
            type="text"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            placeholder="Ex: Mensal, Anual"
            required
          />
        </div>
        <div className="form-group">
          <label>Observações:</label>
          <textarea 
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            placeholder="Detalhes adicionais..."
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CustosOportunidadeForm;
