import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { EmpleadosContext } from '../../contexts/empleados.context';

import './empleado-card.styles.scss';
import pencil from '../../assets/pencil.svg';
import trashCan from '../../assets/trash-can.svg';

const EmpleadoCard = ({ empleado }) => {

    const { nombreDelEmpleado, idEmpleado, emailE, telefonoE, area } = empleado;
    const { empleadoEliminado } = useContext(EmpleadosContext);

    return (
        <div className="empleado-card-container">
            <div className="empleado-card-data">
                <span className="empleado-card-id">{idEmpleado}</span>
                <span className="empleado-card-name">{nombreDelEmpleado}</span>
                <span className="empleado-card-email">{emailE}</span>
                <span className="empleado-card-phone">{telefonoE}</span>
                <span className="empleado-card-area">{area}</span>
            </div>
            <div className="empleado-card-actions">
                <Link to={`/empleados/editar-empleado/${idEmpleado}`}>
                    <Button className="empleado-card-actions-button" tabIndex="-1">
                        <img className="empleado-card-actions-img" src={pencil} title="Editar empleado" alt="Un lápiz"/>
                    </Button>
                </Link>
                <Button className="empleado-card-actions-button" onClick={() => empleadoEliminado(empleado)}>
                    <img className="empleado-card-actions-img" src={trashCan} title="Eliminar empleado" alt="Un bote de basura"/>
                </Button>
            </div>
        </div>
    );
}

export default EmpleadoCard;