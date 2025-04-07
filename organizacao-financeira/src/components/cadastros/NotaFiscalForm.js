// src/components/cadastros/NotaFiscalForm.js
import React, { useState } from 'react';
import '../styles/cadastrosStyles.css';

function NotaFiscalForm() {
  const [numeroNota, setNumeroNota] = useState('');
  const [dataEmissao, setDataEmissao] = useState('');
  const [comprador, setComprador] = useState('');
  const [vendedor, setVendedor] = useState('');
  const [itens, setItens] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [impostos, setImpostos] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nota Fiscal:', {
      numeroNota,
      dataEmissao,
      comprador,
      vendedor,
      itens,
      valorTotal,
      impostos,
      observacoes,
    });
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Nota Fiscal</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Número da Nota:</label>
          <input 
            type="text"
            value={numeroNota}
            onChange={(e) => setNumeroNota(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data de Emissão:</label>
          <input 
            type="date"
            value={dataEmissao}
            onChange={(e) => setDataEmissao(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Comprador:</label>
          <input 
            type="text"
            value={comprador}
            onChange={(e) => setComprador(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Vendedor:</label>
          <input 
            type="text"
            value={vendedor}
            onChange={(e) => setVendedor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Itens:</label>
          <textarea 
            value={itens}
            onChange={(e) => setItens(e.target.value)}
            placeholder="Descrição, quantidade, valor unitário"
            required
          />
        </div>
        <div className="form-group">
          <label>Valor Total (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={valorTotal}
            onChange={(e) => setValorTotal(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Impostos:</label>
          <input 
            type="text"
            value={impostos}
            onChange={(e) => setImpostos(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Observações:</label>
          <textarea 
            value={observacoes}
            onChange={(e) => setObservacoes(e.target.value)}
            placeholder="Informações adicionais..."
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default NotaFiscalForm;
