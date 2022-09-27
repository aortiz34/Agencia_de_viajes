import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ClientesContext } from '../../contexts/clientes.context';

const ClienteCard = ({ cliente }) => {

    const { nombreDelCliente, id, email, telefono, tipoDeTarjeta } = cliente;
    const { clienteEliminado } = useContext(ClientesContext);

    return (
        <div className="cliente-card-container">
            <samp>{nombreDelCliente}</samp><br />
            <samp>{id}</samp><br />
            <samp>{email}</samp><br />
            <samp>{telefono}</samp><br />
            <samp>{tipoDeTarjeta}</samp><br />
            <Button>
                <Link to={`editar-cliente/${id}`}>Editar</Link>
            </Button>
            <Button onClick={() => clienteEliminado(cliente)}>
                Eliminar
            </Button>
            <br />
        </div>
    );
}

export default ClienteCard;