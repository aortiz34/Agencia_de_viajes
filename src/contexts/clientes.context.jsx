import { createContext, useState } from "react";

const agregarCliente = (clientes, clienteToAdd) => {
    const existeCliente = clientes.find((cliente) => cliente.id === clienteToAdd.id);
    if (existeCliente){
        return 'Este cliente ya ha sido registrado';
    }
    return [ ...clientes, 
        {
            nombreDelCliente: clienteToAdd.nombreDelCliente,
            id: clienteToAdd.id,
            email: clienteToAdd.email,
            telefono: clienteToAdd.telefono,
            tipoDeTarjeta: clienteToAdd.tipoDeTarjeta
        } 
    ]
}

export const ClientesContext = createContext({
    clientes: [],
    clienteAgregado: () => {}
});

export const ClientesProvider = ({children}) => {
    const [clientes, setClientes] = useState(
        [
            {
                nombreDelCliente: 'Juan',
                id: '1',
                email: 'a@a.a',
                telefono: '34112341',
                tipoDeTarjeta: 'debito'
            },
            {
                nombreDelCliente: 'Federico',
                id: '2',
                email: 'b@b.b',
                telefono: '332345234',
                tipoDeTarjeta: 'credito'
            },
            {
                nombreDelCliente: 'Gustavo',
                id: '3',
                email: 'c@c.c',
                telefono: '3412345324',
                tipoDeTarjeta: 'debito'
            },
            {
                nombreDelCliente: 'Pedro',
                id: '4',
                email: 'p@p.p',
                telefono: '452452234',
                tipoDeTarjeta: 'credito'
            }
        ]
        );

    const clienteAgregado = (clienteToAdd) => {
        setClientes(agregarCliente(clientes, clienteToAdd));
    };

    const value = {clientes, clienteAgregado};

    return <ClientesContext.Provider value={value}>{children}</ClientesContext.Provider>
}