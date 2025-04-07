// src/components/cadastros/MetasFinanceirasForm.js
import React, { useState } from 'react';
import '../styles/cadastrosStyles.css';

function MetasFinanceirasForm() {
  const [titulo, setTitulo] = useState('');
  const [valorAlvo, setValorAlvo] = useState('');
  const [dataAlvo, setDataAlvo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('pendente');

  const handleSubmit = (e) => {
    e.preventDefault();
    const metaData = {
      titulo,
      valorAlvo: parseFloat(valorAlvo),
      dataAlvo,
      descricao,
      status,
    };
    console.log("Meta financeira cadastrada:", metaData);
  };

  return (
    <div className="form-container green-background">
      <h2 className="form-title">Cadastro de Metas Financeiras</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título da Meta:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex: Aumentar produção de soja"
            required
          />
        </div>
        <div className="form-group">
          <label>Valor Alvo (R$):</label>
          <input
            type="number"
            step="0.01"
            value={valorAlvo}
            onChange={(e) => setValorAlvo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data Alvo:</label>
          <input
            type="date"
            value={dataAlvo}
            onChange={(e) => setDataAlvo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descrição/Observações:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Detalhes da meta..."
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="pendente">Pendente</option>
            <option value="alcançada">Alcançada</option>
          </select>
        </div>
        <button type="submit" className="submit-button">Salvar</button>
      </form>
    </div>
  );
}

export default MetasFinanceirasForm;
