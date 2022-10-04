import React, { useState, useContext } from 'react';
import FormInput from '../form-input/form-input.components.jsx';
import Button from '../button/button.component.jsx';
import { SessionContext } from '../../contexts/SessionContext.js';

import './Login.styles.scss';

export default function Login() {
  const [state, setState] = useState({ email: "", password: "" });
  const {login} = useContext(SessionContext);

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

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login-form">
        <FormInput onChange={handleChange} name="email" value={state.email} label="Correo" type="email" />
        <FormInput onChange={handleChange} name="password" value={state.password} label="Contraseña" type="password" password="true" />
        <Button>Iniciar sesión</Button>
      </form>
    </div>
  );
}