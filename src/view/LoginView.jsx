import React from 'react';
import './LoginView.css'; 

export default function LoginView() {
  return (
    <div className="login-container">
      <div className="login-card">
        
        <h2 className="login-title">LOGIN</h2>
        
        <form className="login-form">
          {/* Input de Usuario */}
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input type="text" placeholder="Usuario" required />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input type="password" placeholder="Contraseña" required />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" /> Recordarme
            </label>
            <a href="#" className="forgot-link">Olvidaste tu contraseña?</a>
          </div>

          {/* Botón de ingreso */}
          <button type="submit" className="login-btn">LOGIN</button>
        </form>

        {/* Enlace para ir al Registro */}
        <a href="#" className="create-account-link">Crear cuenta</a>

      </div>
    </div>
  );
}
