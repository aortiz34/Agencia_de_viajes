import { Routes, Route } from 'react-router-dom';
import NavBar from './routes/navBar/navBar.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
      </Route>
    </Routes>
  );
};

export default App;
