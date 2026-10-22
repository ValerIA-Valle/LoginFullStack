import React, { useState } from 'react';
import './LoginView.css'; // Aquí llamamos al archivo de estilos CSS de arriba

export default function LoginView({ onNavigateToRegister, onNavigateToRecovery }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos listos para enviar:', { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">LOGIN</h2>
        
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Input Usuario */}
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input 
              type="text" 
              placeholder="Usuario" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>

          {/* Input Contraseña */}
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Recordarme
            </label>
            <a 
              href="#" 
              className="forgot-link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToRecovery();
              }}
            >
              ¿Olvidó su contraseña?
            </a>

          </div>

          <button type="submit" className="login-btn">LOGIN</button>
        </form>

        <a 
          href="#" 
          className="create-account-link"
          onClick={(e) => {
            e.preventDefault();
            onNavigateToRegister();
          }}
        >
          Crear cuenta
        </a>
      </div>
    </div>
  );
}
