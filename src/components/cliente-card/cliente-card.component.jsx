import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ClientesContext } from '../../contexts/clientes.context';

import './cliente-card.styles.scss';
import pencil from '../../assets/pencil.svg';
import trashCan from '../../assets/trash-can.svg';

const ClienteCard = ({ cliente }) => {

    const { nombreDelCliente, id, email, telefono, tipoDeTarjeta } = cliente;
    const { clienteEliminado } = useContext(ClientesContext);

    return (
        <div className="cliente-card-container">
            <div className="cliente-card-data">
                <span className="cliente-card-id">{id}</span>
                <span className="cliente-card-name">{nombreDelCliente}</span>
                <span className="cliente-card-email">{email}</span>
                <span className="cliente-card-phone">{telefono}</span>
                <span className="cliente-card-type">{tipoDeTarjeta}</span>
            </div>
            <div className="cliente-card-actions">
                <Link to={`/clientes/editar-cliente/${id}`}>
                    <Button className="cliente-card-actions-button" tabIndex="-1">
                        <img className="cliente-card-actions-img" src={pencil} title="Editar cliente" alt="Un lápiz"/>
                    </Button>
                </Link>
                <Button className="cliente-card-actions-button" onClick={() => clienteEliminado(cliente)}>
                    <img className="cliente-card-actions-img" src={trashCan} title="Eliminar cliente" alt="Un bote de basura"/>
                </Button>
            </div>
        </div>
    );
}

export default ClienteCard;