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
        {/* ... Outros itens */}
      </ul>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}

export default Sidebar;
