// src/components/Sidebar.js
import React from 'react';
import './styles/Sidebar.css';

function Sidebar({ isOpen, onClose, onSelectSection }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li onClick={() => { onSelectSection('metas'); onClose(); }}>
          Metas Financeiras
        </li>
        <li onClick={() => { onSelectSection('gastos'); onClose(); }}>
          Gastos da Produção
        </li>
        <li onClick={() => { onSelectSection('renda'); onClose(); }}>
          Renda Projetada
        </li>
        <li onClick={() => { onSelectSection('commodities'); onClose(); }}>
          Commodities
        </li>
        <li onClick={() => { onSelectSection('despesas'); onClose(); }}>
          Despesas Pessoais
        </li>
        <li onClick={() => { onSelectSection('financiamentos'); onClose(); }}>
          Financiamentos
        </li>
        <li onClick={() => { onSelectSection('investimentos'); onClose(); }}>
          Investimentos
        </li>
        <li onClick={() => { onSelectSection('oportunidade'); onClose(); }}>
          Custos de Oportunidade
        </li>
        <li onClick={() => { onSelectSection('notafiscal'); onClose(); }}>
          Emissão de Nota Fiscal
        </li>
      </ul>
      {/* Removemos o botão "Fechar" daqui */}
    </div>
  );
}

export default Sidebar;
