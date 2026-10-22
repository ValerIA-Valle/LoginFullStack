export const emptyRegistration = { userName: '', phone: '', email: '', password: '', confirmPassword: '' }

export function validateRegistration(values) {
  const errors = {}
  if (!values.userName.trim()) errors.userName = 'Ingresa tu nombre de usuario.'
  const phone = values.phone.trim()
  const digits = phone.replace(/\D/g, '')
  if (!phone) errors.phone = 'Ingresa tu teléfono.'
  else if (!/^\+?[\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15) errors.phone = 'Ingresa un teléfono válido de 7 a 15 dígitos.'
  if (!values.email.trim()) errors.email = 'Ingresa tu correo electrónico.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Ingresa un correo electrónico válido.'
  if (values.password.length < 8) errors.password = 'La contraseña debe tener al menos 8 caracteres.'
  if (!values.confirmPassword) errors.confirmPassword = 'Confirma tu contraseña.'
  else if (values.confirmPassword !== values.password) errors.confirmPassword = 'Las contraseñas no coinciden.'
  return errors
}
