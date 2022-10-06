import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ClientesProvider } from './src/contexts/clientes.context';
import { EmpleadosProvider } from './src/contexts/empleados.context';
import { DestinosProvider } from './src/contexts/destinos.context';

import './index.scss';
import App from './src/App';
import reportWebVitals from './src/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DestinosProvider>
        <EmpleadosProvider>
          <ClientesProvider>
            <App />
          </ClientesProvider>
        </EmpleadosProvider>
      </DestinosProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
