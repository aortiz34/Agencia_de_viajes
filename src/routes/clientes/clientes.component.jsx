import { useContext } from "react";
import { ClientesContext } from "../../contexts/clientes.context";

import ClientesForm from "../../components/clientes-form/clientes-form.component";
import ClienteCard from "../../components/cliente-card/cliente-card.component";

const Clientes = () => {

    const {clientes} = useContext(ClientesContext);

    return(
        <div>
            <ClientesForm/>
             <div className="clientes-catalogue-container">
            {clientes.map((cliente) => (
                <ClienteCard key={cliente.id} cliente={cliente}/>
            ))}
        </div>
        </div>
    );
};

export default Clientes;