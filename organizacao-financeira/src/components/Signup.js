// src/components/Signup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './styles/Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log('handleSignup acionado');
    console.log('Valores:', email, senha, confirmarSenha);

    if (senha !== confirmarSenha) {
      setError('As senhas não conferem.');
      return;
    }

    try {
      console.log('Criando usuário com createUserWithEmailAndPassword...');
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log('Usuário cadastrado:', user.uid);

      console.log('Chamando setDoc no Firestore...');
      await setDoc(doc(db, 'users', user.uid), {
        email: email,
        createdAt: new Date()
      });
      console.log('setDoc concluído com sucesso!');

      setSuccess('Cadastro realizado com sucesso! Redirecionando para login...');
      setError('');
      console.log('Mensagem de sucesso definida');

      setTimeout(() => {
        console.log('Redirecionando para /login');
        navigate('/login');
      }, 3000);

    } catch (err) {
      console.error('Erro no cadastro:', err);
      if (err.code === 'auth/email-already-in-use') {
        setError('Este e-mail já está cadastrado. Por favor, faça login ou use outro e-mail.');
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="signup-box">
          <h2>Cadastro</h2>
          {error && <p className="signup-error">{error}</p>}
          {success && <p className="signup-success" style={{ color: 'green', fontSize: '16px' }}>{success}</p>}
          <form className="signup-form" onSubmit={handleSignup}>
            <div className="form-group">
              <label>Email:</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input 
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required 
              />
            </div>
            <div className="form-group">
              <label>Confirmar Senha:</label>
              <input 
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required 
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
      <div className="signup-right"></div>
    </div>
  );
}

export default Signup;
