import { createContext, useState, useEffect } from "react";

const agregarCliente = (clientes, clienteToAdd) => {
    const existeCliente = clientes.find((cliente) => {
        return cliente.id === clienteToAdd.id || cliente.email === clienteToAdd.email;
    });
    if (existeCliente) {
        console.log('Este cliente ya ha sido registrado');
        return [...clientes];
    }
    return [
        ...clientes,
        {
            nombreDelCliente: clienteToAdd.nombreDelCliente,
            id: clienteToAdd.id,
            email: clienteToAdd.email,
            telefono: clienteToAdd.telefono,
            tipoDeTarjeta: clienteToAdd.tipoDeTarjeta
        }
    ];
}

const editarCliente = (clientes, clientePrev, clienteToEdit) => {
    const datosValidos = clientes.reduce((prev, curr) => {
        if (curr === clientePrev) return prev;
        return prev && curr.id !== clienteToEdit.id && curr.email !== clienteToEdit.email;
    }, true);

    if (!datosValidos) {
        console.log('El correo o la id ingresada ya está en uso');
        return [...clientes];
    }

    if (clientePrev.id === clienteToEdit.id) {
        return clientes.map((cliente) => (
            cliente.id === clienteToEdit.id ?
                {
                    ...cliente,
                    nombreDelCliente: clienteToEdit.nombreDelCliente,
                    id: clienteToEdit.id,
                    email: clienteToEdit.email,
                    telefono: clienteToEdit.telefono,
                    tipoDeTarjeta: clienteToEdit.tipoDeTarjeta
                } : cliente
        ));
    }

    const nuevosClientes = removerCliente(clientes, clientePrev);
    nuevosClientes.push(clienteToEdit);
    return nuevosClientes;
}

const removerCliente = (clientes, clienteParaEliminar) => {
    const clientesNuevo = [];
    clientes.forEach(cliente => {
        if (cliente.id === clienteParaEliminar.id) return;
        clientesNuevo.push(cliente);
    });

    return clientesNuevo;
}

export const ClientesContext = createContext({
    clientes: [],
    clienteAgregado: () => { },
    clienteEditado: () => { },
    clienteEliminado: () => { },
});

const clientesArray = [
    {
        nombreDelCliente: 'Juan Campos Ruiz',
        id: '1',
        email: 'juan@hotmail.com',
        telefono: '34112341',
        tipoDeTarjeta: 'debito'
    },
    {
        nombreDelCliente: 'Federico Ocampo Fernandez',
        id: '2',
        email: 'federico@hotmail.com',
        telefono: '332345234',
        tipoDeTarjeta: 'credito'
    },
    {
        nombreDelCliente: 'Gustavo Díaz Frias',
        id: '3',
        email: 'gustavo@gmail.com',
        telefono: '3412345324',
        tipoDeTarjeta: 'debito'
    },
    {
        nombreDelCliente: 'Pedro Gilberto Gonzales Pineda',
        id: '4',
        email: 'pedro@gmail.com',
        telefono: '452452234',
        tipoDeTarjeta: 'credito'
    },
    {
        nombreDelCliente: 'Luis López Péres',
        id: '5',
        email: 'Luis@hotmail.com',
        telefono: '342412341',
        tipoDeTarjeta: 'debito'
    },
    {
        nombreDelCliente: 'Sergío Pérez Campos',
        id: '6',
        email: 'sp@hotmail.com',
        telefono: '332345234',
        tipoDeTarjeta: 'credito'
    },
    {
        nombreDelCliente: 'Tiburcio Jiménez',
        id: '7',
        email: 'tibu@gmail.com',
        telefono: '3412345324',
        tipoDeTarjeta: 'debito'
    },
    {
        nombreDelCliente: 'Guillermo Hernandez Soto',
        id: '8',
        email: 'memo@gmail.com',
        telefono: '452452234',
        tipoDeTarjeta: 'credito'
    },
    {
        nombreDelCliente: 'Hugo Cedrun Gallardo',
        id: '9',
        email: 'hugo@hotmail.com',
        telefono: '34112341',
        tipoDeTarjeta: 'debito'
    },
    {
        nombreDelCliente: 'Felipe Mendez Pineda',
        id: '10',
        email: 'felipe@hotmail.com',
        telefono: '332345234',
        tipoDeTarjeta: 'credito'
    },
    {
        nombreDelCliente: 'Raul Ernesto Gómez Cevilla',
        id: '11',
        email: 'cevilla@gmail.com',
        telefono: '3412345324',
        tipoDeTarjeta: 'debito'
    },
    {
        nombreDelCliente: 'Maximiliano Bernardo Arias García',
        id: '12',
        email: 'max@gmail.com',
        telefono: '452452234',
        tipoDeTarjeta: 'credito'
    }
];

export const ClientesProvider = ({ children }) => {
    const [clientes, setClientes] = useState(JSON.parse(localStorage.getItem('clientes')) ?? clientesArray);

    const clienteAgregado = (clienteToAdd) => {
        setClientes(agregarCliente(clientes, clienteToAdd));
    };

    const clienteEditado = (clientePrev, clienteToEdit) => {
        setClientes(editarCliente(clientes, clientePrev, clienteToEdit));
    };

    const clienteEliminado = (clienteToDelete) => {
        setClientes(removerCliente(clientes, clienteToDelete));
    };

    useEffect(() => {
        localStorage.setItem('clientes', JSON.stringify(clientes));
    }, [clientes]);

    const value = { clientes, clienteAgregado, clienteEditado, clienteEliminado };

    return <ClientesContext.Provider value={value}>{children}</ClientesContext.Provider>
}