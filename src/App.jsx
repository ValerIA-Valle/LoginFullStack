import { useEffect, useState } from 'react'
import LoginView from './view/LoginView.jsx'
import RegisterView from './view/RegisterView.jsx'

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    function handlePopState() {
      setPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(nextPath) {
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, '', nextPath)
    }
    setPath(nextPath)
  }

  const isRegister = path === '/register' || path === '/register/'

  return (
    <>
      <div hidden={isRegister}>
        <LoginView onRegister={() => navigate('/register')} />
      </div>
      {isRegister && <RegisterView onCancel={() => navigate('/')} />}
    </>
  )
}
