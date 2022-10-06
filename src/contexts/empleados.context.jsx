import { createContext, useState, useEffect } from "react";

const agregarEmpleado = (empleados, empleadoToAdd) => {
    const existeEmpleado = empleados.find((empleado) => {
        return empleado.idEmpleado === empleadoToAdd.idEmpleado || empleado.emailE === empleadoToAdd.emailE;
    });
    if (existeEmpleado) {
        console.log('Este empleado ya ha sido registrado');
        return [...empleados];
    }
    return [
        ...empleados,
        {
            nombreDelEmpleado: empleadoToAdd.nombreDelEmpleado,
            idEmpleado: empleadoToAdd.idEmpleado,
            emailE: empleadoToAdd.emailE,
            telefonoE: empleadoToAdd.telefonoE,
            area: empleadoToAdd.area
        }
    ];
}

const editarEmpleado = (empleados, EmpleadoPrev, empleadoToEdit) => {
    const datosValidos = empleados.reduce((prev, curr) => {
        if (curr === EmpleadoPrev) return prev;
        return prev && curr.idEmpleado !== empleadoToEdit.idEmpleado && curr.emailE !== empleadoToEdit.emailE;
    }, true);

    if (!datosValidos) {
        console.log('El correo o la idEmpleado ingresada ya está en uso');
        return [...empleados];
    }

    if (EmpleadoPrev.idEmpleado === empleadoToEdit.idEmpleado) {
        return empleados.map((empleado) => (
            empleado.idEmpleado === empleadoToEdit.idEmpleado ?
                {
                    ...empleado,
                    nombreDelEmpleado: empleadoToEdit.nombreDelEmpleado,
                    idEmpleado: empleadoToEdit.idEmpleado,
                    emailE: empleadoToEdit.emailE,
                    telefonoE: empleadoToEdit.telefonoE,
                    area: empleadoToEdit.area
                } : empleado
        ));
    }

    const nuevosempleados = removerEmpleado(empleados, EmpleadoPrev);
    nuevosempleados.push(empleadoToEdit);
    return nuevosempleados;
}

const removerEmpleado = (empleados, empleadoParaEliminar) => {
    const empleadosNuevo = [];
    empleados.forEach(empleado => {
        if (empleado.idEmpleado === empleadoParaEliminar.idEmpleado) return;
        empleadosNuevo.push(empleado);
    });

    return empleadosNuevo;
}

export const EmpleadosContext = createContext({
    empleados: [],
    empleadoAgregado: () => { },
    empleadoEditado: () => { },
    empleadoEliminado: () => { },
});

const empleadosArray = [
    {
        nombreDelEmpleado: 'Natalio Benítez Quesada',
        idEmpleado: '1',
        emailE: 'spike68@cuedigy.com',
        telefonoE: '34112341',
        area: 'Servicio al cliente'
    },
    {
        nombreDelEmpleado: 'Severo Sedano Valera',
        idEmpleado: '2',
        emailE: 'koksalasgin@tigo.tk',
        telefonoE: '332345234',
        area: 'Promocion de destinos'
    },
    {
        nombreDelEmpleado: 'Felicidad Clavero Alemany',
        idEmpleado: '3',
        emailE: 'checkaccess@plexvenet.com',
        telefonoE: '3412345324',
        area: 'Marketing'
    },
    {
        nombreDelEmpleado: 'Estefanía Camacho Otero',
        idEmpleado: '4',
        emailE: 'meitrifruyumoi-2280@yopmail.com',
        telefonoE: '452452234',
        area: 'Mantenimiento de página'
    },
    {
        nombreDelEmpleado: 'Cristian Hernando Pedrero',
        idEmpleado: '5',
        emailE: 'hoitroifragreillo-7892@yopmail.com',
        telefonoE: '34112341',
        area: 'Técnico Electricista'
    },
    {
        nombreDelEmpleado: 'Amor Augusto Mascaró Bayón',
        idEmpleado: '6',
        emailE: 'pezitrorefi-3454@yopmail.com',
        telefonoE: '332345234',
        area: 'Creador de contenido'
    },
    {
        nombreDelEmpleado: 'Genoveva Manuel Caparrós',
        idEmpleado: '7',
        emailE: 'creinnatedagrau-6744@yopmail.com',
        telefonoE: '3412345324',
        area: 'Marketing'
    },
    {
        nombreDelEmpleado: 'Mercedes Quevedo-Blanch',
        idEmpleado: '8',
        emailE: 'creilalloukussau-8518@yopmail.com',
        telefonoE: '452452234',
        area: 'Ingeniero en sistemas'
    },
    {
        nombreDelEmpleado: 'Nicolás Tormo Díez',
        idEmpleado: '9',
        emailE: 'zauyeuzonoifru-9342@yopmail.com',
        telefonoE: '34112341',
        area: 'Agente de ventas'
    },
    {
        nombreDelEmpleado: 'Jose Luis Daza-Pacheco',
        idEmpleado: '10',
        emailE: 'raffoufoigoicre-3646@yopmail.com',
        telefonoE: '332345234',
        area: 'Contador'
    },
    {
        nombreDelEmpleado: 'Leandro Morcillo Cifuentes',
        idEmpleado: '11',
        emailE: 'siwayeibrewe-4298@yopmail.com',
        telefonoE: '3412345324',
        area: 'Gerente general'
    },
    {
        nombreDelEmpleado: 'Diana Burgos Benitez',
        idEmpleado: '12',
        emailE: 'zeicraruhulau-8395@yopmail.com',
        telefonoE: '452452234',
        area: 'Supervisor de eventos'
    },
    {
        nombreDelEmpleado: 'Gastón Rojas Figueras',
        idEmpleado: '13',
        emailE: 'soharihoiza-9940@yopmail.com',
        telefonoE: '34112341',
        area: 'Servicio al cliente'
    },
    {
        nombreDelEmpleado: 'Sabina Cepeda',
        idEmpleado: '14',
        emailE: 'crottamucerou-9754@yopmail.com',
        telefonoE: '332345234',
        area: 'Administradora de viajes'
    },
    {
        nombreDelEmpleado: 'Claudio Cueto',
        idEmpleado: '15',
        emailE: 'kahegemmagra-1199@yopmail.com',
        telefonoE: '3412345324',
        area: 'Marketing'
    },
    {
        nombreDelEmpleado: 'Leonor Susana Camacho Méndez',
        idEmpleado: '16',
        emailE: 'yoseffidoida-4272@yopmail.com',
        telefonoE: '452452234',
        area: 'Mantenimiento de página'
    }
];

export const EmpleadosProvider = ({ children }) => {
    const [empleados, setempleados] = useState(JSON.parse(localStorage.getItem('empleados')) ?? empleadosArray);

    const empleadoAgregado = (empleadoToAdd) => {
        setempleados(agregarEmpleado(empleados, empleadoToAdd));
    };

    const empleadoEditado = (EmpleadoPrev, empleadoToEdit) => {
        setempleados(editarEmpleado(empleados, EmpleadoPrev, empleadoToEdit));
    };

    const empleadoEliminado = (empleadoToDelete) => {
        setempleados(removerEmpleado(empleados, empleadoToDelete));
    };

    useEffect(() => {
        localStorage.setItem('empleados', JSON.stringify(empleados));
    }, [empleados]);

    const value = { empleados, empleadoAgregado, empleadoEditado, empleadoEliminado };

    return <EmpleadosContext.Provider value={value}>{children}</EmpleadosContext.Provider>
}