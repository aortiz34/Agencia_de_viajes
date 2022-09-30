import { useContext } from "react";
import { DestinosContext } from "../../contexts/destinos.context";
import { Link } from "react-router-dom";

import Button from "../../components/button/button.component";
import DestinoCard from "../../components/destino-card/destino-card.component";

const Destinos = () => {

    const { destinos } = useContext(DestinosContext);

    return (
        <div>
            <Button>
                <Link to="agregar-destino">Agregar nuevo Destino</Link>
            </Button>
            <div className="destinos-catalogue-container">
                {destinos.map((destino) => (
                    <DestinoCard key={destino.idDestino} destino={destino} />
                ))}
            </div>
        </div>
    );
};

export default Destinos;