import { useRef, useState } from 'react'
import { emptyRegistration, validateRegistration } from '../controllers/registerValidation.js'
import '../styles/register.css'

const fields = [
  { name: 'userName', label: 'User Name', type: 'text', autoComplete: 'username', icon: 'user' },
  { name: 'phone', label: 'Phone Number', type: 'tel', autoComplete: 'tel', icon: 'phone' },
  { name: 'email', label: 'Email Address', type: 'email', autoComplete: 'email', icon: 'email' },
  { name: 'password', label: 'Password', type: 'password', autoComplete: 'new-password', icon: 'lock' },
  { name: 'confirmPassword', label: 'Confirm Password', type: 'password', autoComplete: 'new-password', icon: 'lock' },
]

function Icon({ name }) {
  const paths = {
    user: <><circle cx="12" cy="7" r="3" /><path d="M5 21v-3a7 7 0 0 1 14 0v3Z" /></>,
    phone: <path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3-1 3c-1 3-8 0-12-4S1 5 4 4Z" />,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7M3 18l6-6m12 6-6-6" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" /></>,
    eye: <><path d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

export default function RegisterView({ onCancel }) {
  const [values, setValues] = useState({ ...emptyRegistration })
  const [errors, setErrors] = useState({})
  const [visible, setVisible] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [success, setSuccess] = useState(false)
  const formRef = useRef(null)

  function handleChange(event) {
    const { name, value } = event.target
    const next = { ...values, [name]: value }
    setValues(next)
    setSuccess(false)
    if (submitted) setErrors(validateRegistration(next))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validateRegistration(values)
    setSubmitted(true)
    setErrors(nextErrors)
    setSuccess(Object.keys(nextErrors).length === 0)
    const firstError = Object.keys(nextErrors)[0]
    if (firstError) formRef.current.elements.namedItem(firstError).focus()
  }

  function handleReset() {
    setValues({ ...emptyRegistration })
    setErrors({})
    setVisible({})
    setSubmitted(false)
    setSuccess(false)
    onCancel?.()
  }

  return (
    <main className="register-page">
      <section className="register-panel" aria-labelledby="register-title">
        <h1 id="register-title">Register</h1>
        <form ref={formRef} onSubmit={handleSubmit} onReset={handleReset} noValidate>
          <div className="register-fields">
            {fields.map((field) => (
              <div className="register-field" key={field.name}>
                <div className="register-input-row">
                  <span className={`register-icon register-icon-${field.icon}`}><Icon name={field.icon} /></span>
                  <label className="register-sr-only" htmlFor={`register-${field.name}`}>{field.label}</label>
                  <input id={`register-${field.name}`} name={field.name} type={visible[field.name] ? 'text' : field.type}
                    autoComplete={field.autoComplete} placeholder={field.label} required
                    value={values[field.name]} onChange={handleChange}
                    aria-invalid={Boolean(errors[field.name])}
                    aria-describedby={errors[field.name] ? `register-${field.name}-error` : undefined} />
                  {field.type === 'password' && (
                    <button className="register-eye" type="button" aria-label={`${visible[field.name] ? 'Ocultar' : 'Mostrar'} ${field.label}`}
                      aria-pressed={Boolean(visible[field.name])}
                      onClick={() => setVisible({ ...visible, [field.name]: !visible[field.name] })}>
                      <Icon name="eye" />
                    </button>
                  )}
                </div>
                {errors[field.name] && <p className="register-error" id={`register-${field.name}-error`} aria-live="polite">{errors[field.name]}</p>}
              </div>
            ))}
          </div>
          <button className="register-create" type="submit">Create Account</button>
          <button className="register-cancel" type="reset">Cancel</button>
          {success && <p className="register-success" role="status">Registro simulado correctamente. No se ha creado una cuenta real ni enviado tus datos.</p>}
        </form>
      </section>
    </main>
  )
}
