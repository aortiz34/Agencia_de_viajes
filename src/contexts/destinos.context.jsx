import { createContext, useState, useEffect } from "react";

const agregarDestino = (destinos, destinoToAdd) => {
    const existeDestino = destinos.find((destino) => {
        return destino.idDestino === destinoToAdd.idDestino;
    });
    if (existeDestino) {
        console.log('Este destino ya ha sido registrado');
        return [...destinos];
    }
    return [
        ...destinos,
        {
            nombreDelDestino: destinoToAdd.nombreDelDestino,
            idDestino: destinoToAdd.idDestino,
            codigoPostal: destinoToAdd.codigoPostal,
        }
    ];
}

const editarDestino = (destinos, destinoPrev, destinoToEdit) => {
    const datosValidos = destinos.reduce((prev, curr) => {
        if (curr === destinoPrev) return prev;
        return prev && curr.idDestino !== destinoToEdit.idDestino;
    }, true);

    if (!datosValidos) {
        console.log('El ID ingresada ya está en uso');
        return [...destinos];
    }

    if (destinoPrev.idDestino === destinoToEdit.idDestino) {
        return destinos.map((destino) => (
            destino.idDestino === destinoToEdit.idDestino ?
                {
                    ...destino,
                    nombreDelDestino: destinoToEdit.nombreDelDestino,
                    idDestino: destinoToEdit.idDestino,
                    codigoPostal: destinoToEdit.codigoPostal,
                } : destino
        ));
    }

    const nuevosdestinos = removerDestino(destinos, destinoPrev);
    nuevosdestinos.push(destinoToEdit);
    return nuevosdestinos;
}

const removerDestino = (destinos, destinoParaEliminar) => {
    const destinosNuevo = [];
    destinos.forEach(destino => {
        if (destino.idDestino === destinoParaEliminar.idDestino) return;
        destinosNuevo.push(destino);
    });

    return destinosNuevo;
}

export const DestinosContext = createContext({
    destinos: [],
    destinoAgregado: () => { },
    destinoEditado: () => { },
    destinoEliminado: () => { },
});

const destinosArray = [
    {
        nombreDelDestino: 'Cancun',
        idDestino: '1',
        codigoPostal: '28100',
    },
    {
        nombreDelDestino: 'Tapalpa',
        idDestino: '2',
        codigoPostal: '27000',
    },
    {
        nombreDelDestino: 'Mazamitla',
        idDestino: '3',
        codigoPostal: '29000',
    },
    {
        nombreDelDestino: 'Manzanillo',
        idDestino: '4',
        codigoPostal: '40000',
    },
    {
        nombreDelDestino: 'Guadalajara',
        idDestino: '5',
        codigoPostal: '12300',
    },
    {
        nombreDelDestino: 'Playa del Carmen',
        idDestino: '6',
        codigoPostal: '54000',
    },
    {
        nombreDelDestino: 'Yucatan',
        idDestino: '7',
        codigoPostal: '87000',
    },
    {
        nombreDelDestino: 'Mazatlan',
        idDestino: '8',
        codigoPostal: '67000',
    },
    {
        nombreDelDestino: 'Cabos',
        idDestino: '9',
        codigoPostal: '32200',
    },
    {
        nombreDelDestino: 'Guanajuato',
        idDestino: '10',
        codigoPostal: '49087',
    },
    {
        nombreDelDestino: 'La Paz',
        idDestino: '11',
        codigoPostal: '13809',
    },
    {
        nombreDelDestino: 'NewYork',
        idDestino: '12',
        codigoPostal: '90000',
    },
    {
        nombreDelDestino: 'Chicago',
        idDestino: '13',
        codigoPostal: '78320',
    },
    {
        nombreDelDestino: 'Everet',
        idDestino: '14',
        codigoPostal: '69060',
    },
    {
        nombreDelDestino: 'Las Vegas',
        idDestino: '15',
        codigoPostal: '23400',
    },
    {
        nombreDelDestino: 'Miami',
        idDestino: '16',
        codigoPostal: '60000',
    },
];

export const DestinosProvider = ({ children }) => {
    const [destinos, setDestinos] = useState(JSON.parse(localStorage.getItem('destinos')) ?? destinosArray);

    const destinoAgregado = (destinoToAdd) => {
        setDestinos(agregarDestino(destinos, destinoToAdd));
    };

    const destinoEditado = (destinoPrev, destinoToEdit) => {
        setDestinos(editarDestino(destinos, destinoPrev, destinoToEdit));
    };

    const destinoEliminado = (destinoToDelete) => {
        setDestinos(removerDestino(destinos, destinoToDelete));
    };

    useEffect(() => {
        localStorage.setItem('destinos', JSON.stringify(destinos));
    }, [destinos]);

    const value = { destinos, destinoAgregado, destinoEditado, destinoEliminado };

    return <DestinosContext.Provider value={value}>{children}</DestinosContext.Provider>
}