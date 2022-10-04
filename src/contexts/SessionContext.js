import React, { createContext, useState, useEffect } from 'react';

const adminAccounts = [
  { email: 'correo@admin.com', password: 'hola', username: 'Pepe' }
];

export const SessionContext = createContext({});

function sessionLogout(setState) {
  setState(prevState => ({
    ...prevState,
    isLoggedIn: false,
    username: '',
    message: ''
  }));
}

function setSessionMessage(text, setState) {
  setState(prevState => ({
    ...prevState,
    message: text
  }));
}

export function SessionProvider({ children }) {
  const [state, setState] = useState({
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) ?? false,
    message: '',
    username: JSON.parse(localStorage.getItem('username')) ?? '',
    logout: () => sessionLogout(setState),
    setMessage: (text) => setSessionMessage(text, setState),
  });

  function login(email, password) {
    adminAccounts.forEach(account => {
      if (email === account.email && password === account.password) {
        setState(prevState => ({
          ...prevState,
          isLoggedIn: true,
          username: account.username,
          message: ''
        }));
      }
    });
    console.log(state.isLoggedIn);
    if (!state.isLoggedIn) {
      setState(prevState => ({
        ...prevState,
        message: 'El email o contraseña ingresados son incorrectos'
      }));
    }
  }

  useEffect(() => {
    localStorage.setItem('isLoggedIn', state.isLoggedIn);
    localStorage.setItem('username', JSON.stringify(state.username));
  }, [state]);


  return (
    <SessionContext.Provider value={{...state, login}}>
      {children}
    </SessionContext.Provider>
  );
}