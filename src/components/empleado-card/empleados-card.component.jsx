import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { EmpleadosContext } from '../../contexts/empleados.context';

const EmpleadoCard = ({ empleado }) => {

    const { nombreDelEmpleado, idEmpleado, emailE, telefonoE, area } = empleado;
    const { empleadoEliminado } = useContext(EmpleadosContext);

    return (
        <div className="empleado-card-container">
            <samp>{nombreDelEmpleado}</samp><br />
            <samp>{idEmpleado}</samp><br />
            <samp>{emailE}</samp><br />
            <samp>{telefonoE}</samp><br />
            <samp>{area}</samp><br />
            <Button>
                <Link to={`editar-empleado/${idEmpleado}`}>Editar</Link>
            </Button>
            <Button onClick={() => empleadoEliminado(empleado)}>
                Eliminar
            </Button>
            <br />
        </div>
    );
}

export default EmpleadoCard;