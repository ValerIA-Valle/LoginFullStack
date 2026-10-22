import React from 'react'; // 1. Agregamos la importación que faltaba

const styles = {
  page: {
    boxSizing: 'border-box',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 16px',
    background: '#f4f5f7',
    color: '#374151',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'left',
  },
  card: {
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: 440,
    padding: '32px 30px',
    border: '4px solid #a38bbb',
    borderRadius: 4,
    background: '#fff',
  },
  title: {
    margin: '0 0 24px',
    color: '#374151',
    fontSize: 22,
    fontWeight: 500,
    lineHeight: 1.35,
  },
  input: {
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    height: 42,
    padding: '9px 12px',
    border: '1px solid #cbd0d8',
    borderRadius: 3,
    background: '#fff',
    color: '#374151',
    fontSize: 14,
  },
  button: {
    display: 'block',
    width: '100%',
    minHeight: 42,
    marginTop: 14,
    padding: '10px 14px',
    border: 0,
    borderRadius: 3,
    background: '#83679b',
    color: '#fff',
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
  },
  help: {
    margin: '30px 0 8px',
    color: '#555e6b',
    fontSize: 14,
    lineHeight: 1.6,
  },
  returnText: {
    margin: 0,
    color: '#555e6b',
    fontSize: 14,
    lineHeight: 1.6,
  },
  link: {
    color: '#83679b',
    textDecoration: 'underline',
    textUnderlineOffset: 2,
    cursor: 'pointer'
  },
}

// 2. Agregamos { onBack } para recibir la función desde App.jsx
function RecoveryView({ onBack }) {
  return (
    <main style={styles.page}>
      <section aria-labelledby="recovery-title" style={styles.card}>
        <h1 id="recovery-title" style={styles.title}>
          Recuperar contraseña
        </h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            aria-label="Correo electrónico"
            autoComplete="email"
            name="email"
            placeholder="correo@dominio.com"
            style={styles.input}
            type="email"
          />
          <button style={styles.button} type="submit">
            Recuperar contraseña
          </button>
        </form>
        <p style={styles.help}>¿Ya tienes tu contraseña?</p>
        <p style={styles.returnText}>
          Entonces,{' '}
          {/* 3. Cambiamos el comportamiento para que use onBack sin recargar la web */}
          <a 
            style={styles.link} 
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
          >
            haz click aquí
          </a>{' '}
          para acceder a tu Login.
        </p>
      </section>
    </main>
  )
}

export default RecoveryView;
