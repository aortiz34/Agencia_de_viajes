import React, {createContext, useState, useEffect} from 'react';

const adminAccounts = [
  {email: 'correo@admin.com', password: 'hola'}
];

export const SessionContext = createContext({isLoggedIn: false, login: () => {}});

export function SessionProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ?? false);

  function login(email, password) {
    adminAccounts.forEach(account => {
      if (email === account.email && password === account.password) {
        setIsLoggedIn(true);
      }
    });
  }

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn)
  }, [isLoggedIn]);


  return (
    <SessionContext.Provider value={{isLoggedIn, login}}>
      {children}
    </SessionContext.Provider>
  );
}