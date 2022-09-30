import { useContext } from "react";
import { DestinosContext } from "../../contexts/destinos.context";
import { Link } from "react-router-dom";

import Button from "../../components/button/button.component";
import DestinoCard from "../../components/destino-card/destino-card.component";
import './destinos.styles.scss';

const Destinos = () => {

    const { destinos } = useContext(DestinosContext);

    return (
        <div className="destinos-catalogue-wrapper container">
            <Link className="destinos-catalogue-link" to="/destinos/agregar-destino">
                <Button tabIndex="-1">
                    Agregar nuevo Destino
                </Button>
            </Link>
            <div className="destinos-catalogue">
                <header className="destinos-catalogue-header-container">
                    <div className="destinos-catalogue-header">
                        <span className="destinos-catalogue-id">ID</span>
                        <span className="destinos-catalogue-name">Nombre</span>
                        <span className="destinos-catalogue-cp">Código postal</span>
                    </div>
                </header>
                <div className="destinos-catalogue-container">
                    {destinos.map((destino) => (
                        <DestinoCard key={destino.idDestino} destino={destino} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinos;