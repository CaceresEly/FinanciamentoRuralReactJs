// src/components/MainLayout.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSelectSection = (sectionKey) => {
    setActiveSection(sectionKey);
    setMenuOpen(false);
  };

  return (
    <>
      <Header onToggleMenu={handleToggleMenu} />
      <Sidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelectSection={handleSelectSection}
      />
      {/* Passa activeSection para o Outlet, se necessário */}
      <Outlet context={{ activeSection }} />
    </>
  );
}

export default MainLayout;
