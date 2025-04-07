// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import Signup from './components/Signup';
import CadastroHome from './components/CadastroHome';

// Formulários de cadastro
import MetasFinanceirasForm from './components/cadastros/MetasFinanceirasForm';
import GastosProducaoForm from './components/cadastros/GastosProducaoForm';
import RendaProjetadaForm from './components/cadastros/RendaProjetadaForm';
import CommoditiesForm from './components/cadastros/CommoditiesForm';
import DespesasPessoaisForm from './components/cadastros/DespesasPessoaisForm';
import FinanciamentosForm from './components/cadastros/FinanciamentosForm';
import InvestimentosForm from './components/cadastros/InvestimentosForm';
import CustosOportunidadeForm from './components/cadastros/CustosOportunidadeForm';
import NotaFiscalForm from './components/cadastros/NotaFiscalForm';

// Dashboard ou outra rota inicial
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* ROTAS PÚBLICAS: sem header */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ROTAS COM LAYOUT (Header + Sidebar) */}
        <Route element={<MainLayout />}>
          {/* Tela inicial do app (você pode escolher exibir a Home ou o Dashboard) */}
          <Route path="/" element={<CadastroHome />} />

          {/* Rotas de cada formulário */}
          <Route path="/cadastro/metas" element={<MetasFinanceirasForm />} />
          <Route path="/cadastro/gastos" element={<GastosProducaoForm />} />
          <Route path="/cadastro/renda" element={<RendaProjetadaForm />} />
          <Route path="/cadastro/commodities" element={<CommoditiesForm />} />
          <Route path="/cadastro/despesas" element={<DespesasPessoaisForm />} />
          <Route path="/cadastro/financiamentos" element={<FinanciamentosForm />} />
          <Route path="/cadastro/investimentos" element={<InvestimentosForm />} />
          <Route path="/cadastro/oportunidade" element={<CustosOportunidadeForm />} />
          <Route path="/cadastro/notafiscal" element={<NotaFiscalForm />} />

          {/* Exemplo adicional de rota para Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
