import Button from '../button/button.component';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DestinosContext } from '../../contexts/destinos.context';

import './destino-card.styles.scss';
import pencil from '../../assets/pencil.svg';
import trashCan from '../../assets/trash-can.svg';

const DestinoCard = ({ destino }) => {

    const { nombreDelDestino, idDestino, codigoPostal } = destino;
    const { destinoEliminado } = useContext(DestinosContext);

    return (
        <div className="destino-card-container">
            <div className="destino-card-data">
                <span className="destino-card-id">{idDestino}</span>
                <span className="destino-card-name">{nombreDelDestino}</span>
                <span className="destino-card-cp">{codigoPostal}</span>
            </div>
            <div className="destino-card-actions">
                <Link to={`/destinos/editar-destino/${idDestino}`}>
                    <Button className="destino-card-actions-button" tabIndex="-1">
                        <img className="destino-card-actions-img" src={pencil} title="Editar destino" alt="Un lápiz"/>
                    </Button>
                </Link>
                <Button className="destino-card-actions-button" onClick={() => destinoEliminado(destino)}>
                    <img className="destino-card-actions-img" src={trashCan} title="Eliminar destino" alt="Un bote de basura"/>
                </Button>
            </div>
        </div>
    );
}

export default DestinoCard;