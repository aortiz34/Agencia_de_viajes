import { useContext } from "react";
import { ClientesContext } from "../../contexts/clientes.context";
import { Link } from "react-router-dom";

import Button from "../../components/button/button.component";
import ClienteCard from "../../components/cliente-card/cliente-card.component";
import './clientes.styles.scss';

const Clientes = () => {

    const { clientes } = useContext(ClientesContext);

    return (
        <div className="clientes-catalogue-wrapper container">
            <Link className="clientes-catalogue-link" to="/clientes/agregar-cliente">
                <Button tabIndex="-1">
                    Agregar nuevo Cliente
                </Button>
            </Link>
            <div className="clientes-catalogue">
                <header className="clientes-catalogue-header-container">
                    <div className="clientes-catalogue-header">
                        <span className="clientes-catalogue-id">ID</span>
                        <span className="clientes-catalogue-name">Nombre</span>
                        <span className="clientes-catalogue-email">Email</span>
                        <span className="clientes-catalogue-phone">Teléfono</span>
                        <span className="clientes-catalogue-type">Tarjeta</span>
                    </div>
                </header>
                <div className="clientes-catalogue-container">
                    {clientes.map((cliente) => (
                        <ClienteCard key={cliente.id} cliente={cliente} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clientes;