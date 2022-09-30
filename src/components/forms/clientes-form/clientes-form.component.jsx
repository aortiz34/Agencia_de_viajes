import FormInput from "../../form-input/form-input.components";
import Button from "../../button/button.component";
import { useState, useContext } from "react";
import { ClientesContext } from "../../../contexts/clientes.context";
import { useParams, useNavigate } from 'react-router-dom';

import '../form.styles.scss';

const defaultFormFields = {
    nombreDelCliente: '',
    id: '',
    email: '',
    telefono: '',
    tipoDeTarjeta: '',
}

const ClientesForm = () => {
    const { clienteAgregado, clienteEditado, clientes } = useContext(ClientesContext);
    const params = useParams();
    const navigate = useNavigate();

    const currCliente =
        params.hasOwnProperty('idCliente')
            ? clientes.find(cliente => cliente.id === params.idCliente)
            : null

    const [formFields, setFormFields] = useState(currCliente ?? defaultFormFields);
    const { nombreDelCliente, id, email, telefono, tipoDeTarjeta } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const createObject = (nombre, id, email, telefono, tipoDeTarjeta) => {
        return (
            {
                nombreDelCliente: nombre,
                id: id,
                email: email,
                telefono: telefono,
                tipoDeTarjeta: tipoDeTarjeta
            }
        );
    }

    const agregarCliente = (event) => {
        event.preventDefault();
        clienteAgregado(createObject(nombreDelCliente, id, email, telefono, tipoDeTarjeta));
        navigate('/');
    };

    const editarCliente = (event) => {
        event.preventDefault();
        clienteEditado(currCliente, createObject(nombreDelCliente, id, email, telefono, tipoDeTarjeta));
        navigate('/');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div className="clientes-form-container container">
            <p className="clientes-form-text">
                {
                    currCliente !== null
                    ? "Edita todos los campos necesarios del cliente seleccionado"
                    : "Introduce todos los datos para agregar a un nuevo cliente"
                }
            </p>
            <form
                onSubmit={currCliente !== null ? editarCliente : agregarCliente}
                className="clientes-form"
            >
                <FormInput
                    label='Nombre del cliente'
                    type='text'
                    required
                    onChange={handleChange}
                    name='nombreDelCliente'
                    value={nombreDelCliente}
                />
                <FormInput
                    label='ID del cliente'
                    type='number'
                    required
                    onChange={handleChange}
                    name='id'
                    value={id}
                />
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
                <FormInput
                    label='Teléfono'
                    type='number'
                    required
                    onChange={handleChange}
                    name='telefono'
                    value={telefono}
                />
                <FormInput
                    label='Tipo de tarjeta'
                    type='text'
                    required
                    onChange={handleChange}
                    name='tipoDeTarjeta'
                    value={tipoDeTarjeta}
                />
                <div className='clientes-form-buttons'>
                    {
                        currCliente !== null
                            ? <Button className="clientes-form-button" type='submit'>Editar</Button>
                            : <Button className="clientes-form-button" type='submit'>Agregar</Button>
                    }
                    <Button className="clientes-form-button" onClick={resetFormFields} type='button'>Limpiar</Button>
                </div>

            </form>
        </div>
    );
};

export default ClientesForm;