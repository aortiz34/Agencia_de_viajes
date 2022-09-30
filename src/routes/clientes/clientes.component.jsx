import { useContext } from "react";
import { ClientesContext } from "../../contexts/clientes.context";
import { Link } from "react-router-dom";

import Button from "../../components/button/button.component";
import ClienteCard from "../../components/cliente-card/cliente-card.component";

const Clientes = () => {

    const { clientes } = useContext(ClientesContext);

    return (
        <div>
            <Button>
                <Link to="agregar-cliente">Agregar nuevo Cliente</Link>
            </Button>
            <div className="clientes-catalogue-container">
                {clientes.map((cliente) => (
                    <ClienteCard key={cliente.id} cliente={cliente} />
                ))}
            </div>
        </div>
    );
};

export default Clientes;