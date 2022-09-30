import { createContext, useState } from "react";

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

export const DestinosProvider = ({ children }) => {
    const [destinos, setDestinos] = useState(
        [
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
            }
        ]
    );

    const destinoAgregado = (destinoToAdd) => {
        setDestinos(agregarDestino(destinos, destinoToAdd));
    };

    const destinoEditado = (destinoPrev, destinoToEdit) => {
        setDestinos(editarDestino(destinos, destinoPrev, destinoToEdit));
    };

    const destinoEliminado = (destinoToDelete) => {
        setDestinos(removerDestino(destinos, destinoToDelete));
    };

    const value = { destinos, destinoAgregado, destinoEditado, destinoEliminado };

    return <DestinosContext.Provider value={value}>{children}</DestinosContext.Provider>
}