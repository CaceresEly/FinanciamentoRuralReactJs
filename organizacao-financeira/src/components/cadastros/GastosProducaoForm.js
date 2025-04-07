// src/components/cadastros/GastosProducaoForm.js
import React, { useState } from 'react';
import '../styles/cadastrosStyles.css'; // Crie um arquivo CSS para os formulários ou use um já existente

function GastosProducaoForm() {
  const [tipoGasto, setTipoGasto] = useState('');
  const [valor, setValor] = useState('');
  const [dataGasto, setDataGasto] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o Firebase ou processá-los conforme necessário
    console.log('Gastos da Produção:', { tipoGasto, valor, dataGasto, descricao });
  };

  return (
    <div className="form-container">
      <h2>Cadastro de Gastos da Produção</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tipo de Gasto:</label>
          <input 
            type="text"
            value={tipoGasto}
            onChange={(e) => setTipoGasto(e.target.value)}
            placeholder="Ex: Preparo do solo, Manejo, Entressafra"
            required
          />
        </div>
        <div className="form-group">
          <label>Valor do Gasto (R$):</label>
          <input 
            type="number"
            step="0.01"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data do Gasto:</label>
          <input 
            type="date"
            value={dataGasto}
            onChange={(e) => setDataGasto(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descrição/Observações:</label>
          <textarea 
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Detalhes do gasto..."
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default GastosProducaoForm;
