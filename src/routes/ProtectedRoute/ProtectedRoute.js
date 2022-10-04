import React, {useContext, useEffect} from 'react';
import { Navigate } from 'react-router-dom';

import { SessionContext } from '../../contexts/SessionContext.js';

export default function ProtectedRoute({children}) {
  const {isLoggedIn} = useContext(SessionContext);

  useEffect(() => {
    localStorage.setItem('message', 'Debes iniciar sesión para continuar');
  }, []);

  if (!isLoggedIn) {
    return <Navigate to="/" replace/>
  }

  return children;
};