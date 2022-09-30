import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navBar/navBar.component';
import Clientes from './routes/clientes/clientes.component';
import Destinos from './routes/destinos/destinos.component';
import Hoteles from './routes/hoteles/hoteles.component';
import Empleados from './routes/empleados/empleados.component';
import ClientesForm from './components/clientes-form/clientes-form.component';
import EmpleadosForm from './components/empleados-form/empleados-form.component';
import DestinosForm from './components/destinos-form/destinos-form.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Clientes />} />
        <Route path="agregar-cliente" element={<ClientesForm />} />
        <Route path="editar-cliente/:idCliente" element={<ClientesForm />} />
        <Route path='destinos' element={<Destinos />} />
        <Route path="destinos/agregar-destino" element={<DestinosForm />} />
        <Route path="destinos/editar-destino/:idDestino" element={<DestinosForm />} />
        <Route path='hoteles' element={<Hoteles />} />
        <Route path='empleados' element={<Empleados />} />
        <Route path="empleados/agregar-empleado" element={<EmpleadosForm />} />
        <Route path="empleados/editar-empleado/:idEmpleado" element={<EmpleadosForm />} />
      </Route>
    </Routes>
  );
};

export default App;
