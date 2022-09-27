import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navBar/navBar.component';
import Clientes from './routes/clientes/clientes.component';
import Destinos from './routes/destinos/destinos.component';
import Hoteles from './routes/hoteles/hoteles.component';
import Trabajadores from './routes/trabajadores/trabajadores.component';
import ClientesForm from './components/clientes-form/clientes-form.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Clientes />} />
        <Route path="agregar-cliente" element={<ClientesForm />} />
        <Route path="editar-cliente/:idCliente" element={<ClientesForm />} />
        <Route path='destinos' element={<Destinos />} />
        <Route path='hoteles' element={<Hoteles />} />
        <Route path='trabajadores' element={<Trabajadores />} />
      </Route>
    </Routes>
  );
};

export default App;
