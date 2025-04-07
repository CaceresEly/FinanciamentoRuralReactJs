// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './styles/Login.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, usuario, senha);
      console.log("Usuário logado com sucesso:", userCredential.user.uid);
      // Redireciona para a página inicial (ex.: Dashboard ou CadastroHome)
      navigate('/');
    } catch (err) {
      console.error("Erro ao logar:", err);
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <h2>Bem-vindo(a) ao MeuApp</h2>
          <p>Acesse seu painel</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Usuário</label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Digite seu usuário"
                required
              />
            </div>
            <div className="form-group">
              <label>Senha</label>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                required
              />
            </div>
            {error && <p className="login-error">{error}</p>}
            <button type="submit">Entrar</button>
          </form>
          <p className="login-footer">
            Não possui login? <Link to="/signup">Faça o cadastro aqui</Link>
          </p>
        </div>
      </div>
      <div className="login-right"></div>
    </div>
  );
}

export default Login;
