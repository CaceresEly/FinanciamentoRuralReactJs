// src/components/cadastros/RendaProjetadaForm.js
import React, { useState } from 'react';
import '../styles/cadastrosStyles.css';

function RendaProjetadaForm() {
  const [fonte, setFonte] = useState('');
  const [valorProjetado, setValorProjetado] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Renda Projetada:', { fonte, valorProjetado, periodo, descricao });
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Renda Projetada</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fonte de Renda:</label>
          <input 
            type="text"
            value={fonte}
            onChange={(e) => setFonte(e.target.value)}
            placeholder="Ex: Venda de grãos, Leite, etc."
            required
          />
        </div>
        <div className="form-group">
          <label>Valor Projetado (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={valorProjetado}
            onChange={(e) => setValorProjetado(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Período (Mês/Trimestre):</label>
          <input 
            type="text"
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value)}
            placeholder="Ex: Janeiro, Q1, etc."
            required
          />
        </div>
        <div className="form-group">
          <label>Descrição/Observações:</label>
          <textarea 
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Detalhes adicionais..."
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default RendaProjetadaForm;
