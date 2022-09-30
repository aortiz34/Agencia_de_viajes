import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DestinosContext } from '../../contexts/destinos.context';

const DestinoCard = ({ destino }) => {

    const { nombreDelDestino, idDestino, codigoPostal } = destino;
    const { destinoEliminado } = useContext(DestinosContext);

    return (
        <div className="destino-card-container">
            <samp>{nombreDelDestino}</samp><br />
            <samp>{idDestino}</samp><br />
            <samp>{codigoPostal}</samp><br />
            <Button>
                <Link to={`editar-destino/${idDestino}`}>Editar</Link>
            </Button>
            <Button onClick={() => destinoEliminado(destino)}>
                Eliminar
            </Button>
            <br />
        </div>
    );
}

export default DestinoCard;