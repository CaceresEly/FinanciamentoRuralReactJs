// src/components/CadastroHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CadastroHome.css';

function CadastroHome() {
  return (
    <div className="cadastro-home-container">
      <h2 className="cadastro-home-subtitle">
        Selecione o item que deseja cadastrar:
      </h2>

      <div className="cadastro-grid">
        <Link to="/cadastro/metas" className="cadastro-button">
          Metas Financeiras
        </Link>
        <Link to="/cadastro/gastos" className="cadastro-button">
          Gastos da Produção
        </Link>
        <Link to="/cadastro/renda" className="cadastro-button">
          Renda Projetada
        </Link>
        <Link to="/cadastro/commodities" className="cadastro-button">
          Commodities
        </Link>
        <Link to="/cadastro/despesas" className="cadastro-button">
          Despesas Pessoais
        </Link>
        <Link to="/cadastro/financiamentos" className="cadastro-button">
          Financiamentos
        </Link>
        <Link to="/cadastro/investimentos" className="cadastro-button">
          Investimentos
        </Link>
        <Link to="/cadastro/oportunidade" className="cadastro-button">
          Custos de Oportunidade
        </Link>
        <Link to="/cadastro/notafiscal" className="cadastro-button">
          Emissão de Nota Fiscal
        </Link>
      </div>
    </div>
  );
}

export default CadastroHome;
