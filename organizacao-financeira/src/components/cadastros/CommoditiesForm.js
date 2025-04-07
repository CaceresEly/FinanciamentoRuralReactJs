// src/components/cadastros/CommoditiesForm.js
import React, { useState } from 'react';
import '../styles/cadastrosStyles.css';

function CommoditiesForm() {
  const [nome, setNome] = useState('');
  const [precoAtual, setPrecoAtual] = useState('');
  const [dataCotacao, setDataCotacao] = useState('');
  const [fonte, setFonte] = useState('');
  const [variacao, setVariacao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Commodity:', { nome, precoAtual, dataCotacao, fonte, variacao });
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Commodities</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome da Commodity:</label>
          <input 
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Milho, Soja, etc."
            required
          />
        </div>
        <div className="form-group">
          <label>Preço Atual (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={precoAtual}
            onChange={(e) => setPrecoAtual(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data da Cotação:</label>
          <input 
            type="date"
            value={dataCotacao}
            onChange={(e) => setDataCotacao(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Fonte da Cotação:</label>
          <input 
            type="text"
            value={fonte}
            onChange={(e) => setFonte(e.target.value)}
            placeholder="Ex: Bolsa, Site, etc."
          />
        </div>
        <div className="form-group">
          <label>Variação Percentual (%):</label>
          <input 
            type="number"
            step="0.01"
            value={variacao}
            onChange={(e) => setVariacao(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default CommoditiesForm;
