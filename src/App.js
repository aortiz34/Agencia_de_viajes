import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navBar/navBar.component';
import Clientes from './routes/clientes/clientes.component';
import Destinos from './routes/destinos/destinos.component';
import Hoteles from './routes/hoteles/hoteles.component';
import Empleados from './routes/empleados/empleados.component';
import ClientesForm from './components/forms/clientes-form/clientes-form.component';
import EmpleadosForm from './components/forms/empleados-form/empleados-form.component';
import DestinosForm from './components/forms/destinos-form/destinos-form.component';
import Home from './routes/Home/Home';
import ProtectedRoute from './routes/ProtectedRoute/ProtectedRoute';
import { SessionProvider } from './contexts/SessionContext';

const App = () => {
  return (
    <SessionProvider>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="clientes" element={<ProtectedRoute><Clientes /></ProtectedRoute>} />
          <Route path="clientes/agregar-cliente" element={<ProtectedRoute><ClientesForm /></ProtectedRoute>} />
          <Route path="clientes/editar-cliente/:idCliente" element={<ProtectedRoute><ClientesForm /></ProtectedRoute>} />
          <Route path="destinos" element={<ProtectedRoute><Destinos /></ProtectedRoute>} />
          <Route path="destinos/agregar-destino" element={<ProtectedRoute><DestinosForm /></ProtectedRoute>} />
          <Route path="destinos/editar-destino/:idDestino" element={<ProtectedRoute><DestinosForm /></ProtectedRoute>} />
          <Route path="hoteles" element={<ProtectedRoute><Hoteles /></ProtectedRoute>} />
          <Route path="empleados" element={<ProtectedRoute><Empleados /></ProtectedRoute>} />
          <Route path="empleados/agregar-empleado" element={<ProtectedRoute><EmpleadosForm /></ProtectedRoute>} />
          <Route path="empleados/editar-empleado/:idEmpleado" element={<ProtectedRoute><EmpleadosForm /></ProtectedRoute>} />
        </Route>
      </Routes>
    </SessionProvider>
  );
};

export default App;
