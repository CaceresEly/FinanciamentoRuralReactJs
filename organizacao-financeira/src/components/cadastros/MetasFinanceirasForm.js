// src/components/cadastros/MetasFinanceirasForm.js
import React, { useState } from 'react';

function MetasFinanceirasForm() {
  const [nomeMeta, setNomeMeta] = useState('');
  const [valorDesejado, setValorDesejado] = useState('');
  const [dataAlvo, setDataAlvo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você poderia salvar no Firebase ou outro backend
    const meta = {
      nomeMeta,
      valorDesejado: parseFloat(valorDesejado),
      dataAlvo,
      descricao
    };
    console.log('Cadastrando meta financeira:', meta);
    // Limpar campos ou redirecionar após salvar
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto' }}>
      <h2>Cadastro de Metas Financeiras</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome da Meta:</label>
          <input
            type="text"
            value={nomeMeta}
            onChange={(e) => setNomeMeta(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Valor Desejado (R$):</label>
          <input
            type="number"
            step="0.01"
            value={valorDesejado}
            onChange={(e) => setValorDesejado(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Data Alvo:</label>
          <input
            type="date"
            value={dataAlvo}
            onChange={(e) => setDataAlvo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Descrição/Observações:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default MetasFinanceirasForm;
