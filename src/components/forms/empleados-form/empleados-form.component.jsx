import FormInput from '../../form-input/form-input.components';
import Button from '../../button/button.component';
import { useState, useContext } from 'react';
import { EmpleadosContext } from '../../../contexts/empleados.context';
import { useParams, useNavigate } from 'react-router-dom';

import '../form.styles.scss';

const defaultFormFields = {
    nombreDelEmpleado: '',
    idEmpleado: '',
    emailE: '',
    telefonoE: '',
    area: '',
}

const EmpleadosForm = () => {
    const { empleadoAgregado, empleadoEditado, empleados } = useContext(EmpleadosContext);
    const params = useParams();
    const navigate = useNavigate();

    const currEmpleado =
        params.hasOwnProperty('idEmpleado')
            ? empleados.find(empleado => empleado.idEmpleado === params.idEmpleado)
            : null

    const [formFields, setFormFields] = useState(currEmpleado ?? defaultFormFields);
    const { nombreDelEmpleado, idEmpleado, emailE, telefonoE, area } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const createObject = (nombre, idEmpleado, emailE, telefonoE, area) => {
        return (
            {
                nombreDelEmpleado: nombre,
                idEmpleado: idEmpleado,
                emailE: emailE,
                telefonoE: telefonoE,
                area: area
            }
        );
    }

    const agregarEmpleado = (event) => {
        event.preventDefault();
        empleadoAgregado(createObject(nombreDelEmpleado, idEmpleado, emailE, telefonoE, area));
        navigate('/empleados');
    };

    const editarEmpleado = (event) => {
        event.preventDefault();
        empleadoEditado(currEmpleado, createObject(nombreDelEmpleado, idEmpleado, emailE, telefonoE, area));
        navigate('/empleados');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <main className="empleados-form-container container">
            <p className="empleados-form-text">
                {
                    currEmpleado !== null
                    ? "Edita todos los campos necesarios del empleado seleccionado"
                    : "Introduce todos los datos para agregar a un nuevo empleado"
                }
            </p>
            <form
                onSubmit={currEmpleado !== null ? editarEmpleado : agregarEmpleado}
                className="empleados-form"
            >
                <FormInput
                    label='Nombre del empleado'
                    type='text'
                    required
                    onChange={handleChange}
                    name='nombreDelEmpleado'
                    value={nombreDelEmpleado}
                />
                <FormInput
                    label='ID del empleado'
                    type='number'
                    required
                    onChange={handleChange}
                    name='idEmpleado'
                    value={idEmpleado}
                />
                <FormInput
                    label='Email'
                    type='emailE'
                    required
                    onChange={handleChange}
                    name='emailE'
                    value={emailE}
                />
                <FormInput
                    label='Teléfono'
                    type='number'
                    required
                    onChange={handleChange}
                    name='telefonoE'
                    value={telefonoE}
                />
                <FormInput
                    label='Area'
                    type='text'
                    required
                    onChange={handleChange}
                    name='area'
                    value={area}
                />
                <div className='empleados-form-buttons'>
                    {
                        currEmpleado !== null
                            ? <Button className="empleados-form-button" type='submit'>Editar</Button>
                            : <Button className="empleados-form-button" type='submit'>Agregar</Button>
                    }
                    <Button className="empleados-form-button" onClick={resetFormFields} type='button'>Limpiar</Button>
                </div>
            </form>
        </main>
    );
};

export default EmpleadosForm;