// src/components/cadastros/InvestimentosForm.js
import React, { useState } from 'react';
import '../styles/cadastrosStyles.css';

function InvestimentosForm() {
  const [tipoInvestimento, setTipoInvestimento] = useState('');
  const [valorInvestido, setValorInvestido] = useState('');
  const [rentabilidade, setRentabilidade] = useState('');
  const [dataAplicacao, setDataAplicacao] = useState('');
  const [dataRetorno, setDataRetorno] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Investimento:', {
      tipoInvestimento,
      valorInvestido,
      rentabilidade,
      dataAplicacao,
      dataRetorno,
      observacoes
    });
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Investimentos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tipo de Investimento:</label>
          <input 
            type="text"
            value={tipoInvestimento}
            onChange={(e) => setTipoInvestimento(e.target.value)}
            placeholder="Ex: Compra de maquinário"
            required
          />
        </div>
        <div className="form-group">
          <label>Valor Investido (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={valorInvestido}
            onChange={(e) => setValorInvestido(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Rentabilidade Esperada (%):</label>
          <input 
            type="number"
            step="0.01"
            value={rentabilidade}
            onChange={(e) => setRentabilidade(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data de Aplicação:</label>
          <input 
            type="date"
            value={dataAplicacao}
            onChange={(e) => setDataAplicacao(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data de Retorno/Período:</label>
          <input 
            type="date"
            value={dataRetorno}
            onChange={(e) => setDataRetorno(e.target.value)}
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

export default InvestimentosForm;
