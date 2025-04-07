// src/components/Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaUserPlus, FaUserCircle, FaKey, FaSignOutAlt } from 'react-icons/fa';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './styles/Header.css';

function Header({ onToggleMenu }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Monitora mudanças no estado de autenticação
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Função para deslogar o usuário
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Usuário deslogado com sucesso!');
    } catch (error) {
      console.error('Erro ao deslogar:', error);
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="logo-link">MeuApp</Link>
      </div>

      <div className="header-search">
        <input type="text" placeholder="O que você procura?" />
      </div>

      <div className="header-actions">
        {user ? (
          <>
            <Link to="/meusdados" className="header-button">
              <FaUserCircle size={20} />
              <span>Meus dados</span>
            </Link>
            <Link to="/mudar-senha" className="header-button">
              <FaKey size={20} />
              <span>Mudar a senha</span>
            </Link>
            {/* Botão de Sair */}
            <button onClick={handleSignOut} className="header-button" style={{ border: 'none', background: 'transparent' }}>
              <FaSignOutAlt size={20} />
              <span>Sair</span>
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="header-button">
              <FaUser size={20} />
              <span>Login</span>
            </Link>
            <Link to="/signup" className="header-button">
              <FaUserPlus size={20} />
              <span>Cadastro</span>
            </Link>
          </>
        )}
        <div className="header-hamburger" onClick={onToggleMenu}>
          &#9776;
        </div>
      </div>
    </header>
  );
}

export default Header;
