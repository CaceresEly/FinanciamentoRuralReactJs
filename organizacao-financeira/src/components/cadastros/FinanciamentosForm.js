// src/components/cadastros/FinanciamentosForm.js
import React, { useState } from 'react';
import '../styles/cadastrosStyles.css';

function FinanciamentosForm() {
  const [valorFinanciado, setValorFinanciado] = useState('');
  const [taxaJuros, setTaxaJuros] = useState('');
  const [saldoDevedor, setSaldoDevedor] = useState('');
  const [parcelas, setParcelas] = useState('');
  const [valorParcela, setValorParcela] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Financiamento:', {
      valorFinanciado,
      taxaJuros,
      saldoDevedor,
      parcelas,
      valorParcela,
      dataInicio,
      dataVencimento
    });
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Financiamentos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Valor Financiado (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={valorFinanciado}
            onChange={(e) => setValorFinanciado(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Taxa de Juros (%):</label>
          <input 
            type="number"
            step="0.01"
            value={taxaJuros}
            onChange={(e) => setTaxaJuros(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Saldo Devedor (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={saldoDevedor}
            onChange={(e) => setSaldoDevedor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Número de Parcelas:</label>
          <input 
            type="number"
            value={parcelas}
            onChange={(e) => setParcelas(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Valor da Parcela (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={valorParcela}
            onChange={(e) => setValorParcela(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data de Início:</label>
          <input 
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data de Vencimento:</label>
          <input 
            type="date"
            value={dataVencimento}
            onChange={(e) => setDataVencimento(e.target.value)}
            required
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default FinanciamentosForm;
