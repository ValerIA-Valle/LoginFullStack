# 🔐 LoginFullStack

¡Bienvenido al proyecto **LoginFullStack**! Esta es una aplicación web moderna desarrollada en equipo para la gestión de autenticación de usuarios, implementando un diseño limpio y una arquitectura de software organizada.

---

## 👥 Integrantes del Equipo

* **Valeria Valle** — *Líder de Proyecto & Desarrollo del Login*
* **Gian Marco Garbozo** — *Desarrollo de Registro de Usuarios*
* **Daniel Rivera** — *Desarrollo de Recuperación de Contraseña*

---

## 🚀 Características del Proyecto

El sistema cuenta con un flujo completo de autenticación dividido en 3 vistas principales conectadas dinámicamente:
* 🟪 **User Login:** Pantalla principal con diseño morado pastel y captura de credenciales.
* 📝 **Registro de Usuarios:** Formulario integrado para la creación de nuevas cuentas de cliente.
* 🔒 **Recuperación de Contraseña:** Flujo seguro para restablecer accesos mediante correo electrónico.

---

## 🏗️ Arquitectura del Software

Para mantener el código escalable, limpio y ordenado, el proyecto está estructurado bajo el patrón **MVC (Modelo - Vista - Controlador)**:

* 📂 `src/models/` — Gestión de datos y lógica de negocio.
* 📂 `src/view/` — Componentes visuales e interfaces de usuario (React JSX + CSS).
* 📂 `src/controllers/` — Mediadores entre la vista y el modelo para procesar las acciones.

---

## 🛠️ Tecnologías Utilizadas

* **React 19** — Librería para la construcción de interfaces de usuario.
* **Vite** — Herramienta de construcción ultra rápida para el entorno de desarrollo.
* **JavaScript (ES6+)** — Lenguaje de programación principal.
* **CSS3** — Estilos personalizados sin frameworks externos.

---

## 💻 Instalación y Uso Local

Si deseas clonar y ejecutar este proyecto en tu computadora, sigue estos sencillos pasos en tu terminal:

### 1. Clonar el repositorio
```bash
git clone https://github.com
```

### 2. Entrar a la carpeta del proyecto
```bash
cd LoginFullStack
```

### 3. Instalar las dependencias de Node
```bash
npm install
```

### 4. Levantar el servidor de desarrollo
```bash
npm run dev
```
Luego, abre tu navegador en la ruta indicada por la terminal (usualmente `http://localhost:5173/`).
