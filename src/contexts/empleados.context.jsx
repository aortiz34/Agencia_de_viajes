import { createContext, useState } from "react";

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

export const EmpleadosProvider = ({ children }) => {
    const [empleados, setempleados] = useState(
        [
            {
                nombreDelEmpleado: 'Juan',
                idEmpleado: '1',
                emailE: 'a@a.a',
                telefonoE: '34112341',
                area: 'Servicio al cliente'
            },
            {
                nombreDelEmpleado: 'Federico',
                idEmpleado: '2',
                emailE: 'b@b.b',
                telefonoE: '332345234',
                area: 'Promocion de destinos'
            },
            {
                nombreDelEmpleado: 'Gustavo',
                idEmpleado: '3',
                emailE: 'c@c.c',
                telefonoE: '3412345324',
                area: 'Marketing'
            },
            {
                nombreDelEmpleado: 'Pedro',
                idEmpleado: '4',
                emailE: 'p@p.p',
                telefonoE: '452452234',
                area: 'Mantenimiento de página'
            }
        ]
    );

    const empleadoAgregado = (empleadoToAdd) => {
        setempleados(agregarEmpleado(empleados, empleadoToAdd));
    };

    const empleadoEditado = (EmpleadoPrev, empleadoToEdit) => {
        setempleados(editarEmpleado(empleados, EmpleadoPrev, empleadoToEdit));
    };

    const empleadoEliminado = (empleadoToDelete) => {
        setempleados(removerEmpleado(empleados, empleadoToDelete));
    };

    const value = { empleados, empleadoAgregado, empleadoEditado, empleadoEliminado };

    return <EmpleadosContext.Provider value={value}>{children}</EmpleadosContext.Provider>
}