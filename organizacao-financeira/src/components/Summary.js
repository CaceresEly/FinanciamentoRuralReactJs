import React from 'react';

function Summary({ transactions }) {
  const totalReceitas = transactions
    .filter((t) => t.type === 'receita')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalDespesas = transactions
    .filter((t) => t.type === 'despesa')
    .reduce((sum, t) => sum + t.amount, 0);

  const saldo = totalReceitas - totalDespesas;

  return (
    <div>
      <h2>Resumo Financeiro</h2>
      <p>Receitas: R$ {totalReceitas.toFixed(2)}</p>
      <p>Despesas: R$ {totalDespesas.toFixed(2)}</p>
      <h3>Saldo: R$ {saldo.toFixed(2)}</h3>
    </div>
  );
}

export default Summary;
