import React, { useState, useContext, useEffect } from 'react';
import FormInput from '../form-input/form-input.components.jsx';
import Button from '../button/button.component.jsx';
import { SessionContext } from '../../contexts/SessionContext.js';

import './Login.styles.scss';

export default function Login() {
  const [state, setState] = useState({ email: '', password: '' });
  const { login, isLoggedIn, message, username, logout, setMessage } = useContext(SessionContext);

  useEffect(() => {
    let localMsg = localStorage.getItem('message');
    if (localMsg) {
      setMessage(localMsg);
      localStorage.removeItem('message');
    }
  }, [setMessage]);

  useEffect(() => {
    if (isLoggedIn) {
      setState({ email: '', password: '' });
    }
  }, [isLoggedIn])

  function handleChange(evt) {
    setState(prevState => ({
      ...prevState,
      [evt.target.name]: evt.target.value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    login(state.email, state.password);
  }

  if (isLoggedIn) {
    return (
      <div className="login">
        <h3 className="login-message">Bienvenido {username}</h3>
        <Button onClick={logout}>Cerrar sesión</Button>
      </div>
    );
  }

  return (
    <div className="login">
      {message && <h3 className="login-message">{message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <FormInput onChange={handleChange} name="email" value={state.email} label="Correo" type="email" />
        <FormInput onChange={handleChange} name="password" value={state.password} label="Contraseña" type="password" password="true" />
        <Button>Iniciar sesión</Button>
      </form>
    </div>
  );
}