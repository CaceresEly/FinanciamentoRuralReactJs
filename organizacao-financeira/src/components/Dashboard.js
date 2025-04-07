// src/components/Dashboard.js
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './styles/Dashboard.css';

// Exemplos de “seções” que poderiam ser importadas de outros arquivos
function MetasFinanceiras() {
  return <div className="section-content">Conteúdo de Metas Financeiras</div>;
}
function GastosProducao() {
  return <div className="section-content">Conteúdo de Gastos da Produção</div>;
}
function RendaProjetada() {
  return <div className="section-content">Conteúdo de Renda Projetada</div>;
}
// ... Crie mais componentes para as demais seções, se necessário

function Dashboard() {
  // Obtemos o contexto; se não houver, usamos null como padrão
  const context = useOutletContext();
  const activeSection = context ? context.activeSection : null;

  let sectionContent;
  switch (activeSection) {
    case 'metas':
      sectionContent = <MetasFinanceiras />;
      break;
    case 'gastos':
      sectionContent = <GastosProducao />;
      break;
    case 'renda':
      sectionContent = <RendaProjetada />;
      break;
    // ... Adicione outros cases conforme necessário
    default:
      sectionContent = (
        <div className="section-placeholder">
          Selecione uma seção no menu para visualizar as informações.
        </div>
      );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {sectionContent}
      </div>
    </div>
  );
}

export default Dashboard;
