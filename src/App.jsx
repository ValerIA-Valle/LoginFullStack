import React, { useState } from 'react';
import LoginView from './view/LoginView';
import RecoveryView from './view/recuperacion';
import RegisterView from './view/RegisterView'; 

function App() {
  const [currentView, setCurrentView] = useState('login');

  if (currentView === 'recovery') {
    return <RecoveryView onBack={() => setCurrentView('login')} />;
  }

  if (currentView === 'register') {
    return <RegisterView onCancel={() => setCurrentView('login')} />;
  }
  return (
    <LoginView 
      onNavigateToRegister={() => setCurrentView('register')} 
      onNavigateToRecovery={() => setCurrentView('recovery')} 
    />
  );
}

export default App;
