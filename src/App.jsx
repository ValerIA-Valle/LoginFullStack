import React from 'react';
import LoginView from './view/LoginView';
import RecoveryView from './view/recuperacion';

function App() {
  if (window.location.pathname === '/recuperar-contrasena') {
    return <RecoveryView />;
  }

  return (
    <>
      <div hidden={isRegister}>
        <LoginView onRegister={() => navigate('/register')} />
      </div>
      {isRegister && <RegisterView onCancel={() => navigate('/')} />}
    </>
  )
}
