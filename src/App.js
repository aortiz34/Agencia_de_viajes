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
import { SessionProvider } from './contexts/SessionContext';

const App = () => {
  return (
    <SessionProvider>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="clientes/agregar-cliente" element={<ClientesForm />} />
          <Route path="clientes/editar-cliente/:idCliente" element={<ClientesForm />} />
          <Route path="destinos" element={<Destinos />} />
          <Route path="destinos/agregar-destino" element={<DestinosForm />} />
          <Route path="destinos/editar-destino/:idDestino" element={<DestinosForm />} />
          <Route path="hoteles" element={<Hoteles />} />
          <Route path="empleados" element={<Empleados />} />
          <Route path="empleados/agregar-empleado" element={<EmpleadosForm />} />
          <Route path="empleados/editar-empleado/:idEmpleado" element={<EmpleadosForm />} />
        </Route>
      </Routes>
    </SessionProvider>
  );
};

export default App;
