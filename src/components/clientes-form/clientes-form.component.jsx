import FormInput from "../form-input/form-input.components";
import Button from "../button/button.component";
import { useState, useContext } from "react";
import { ClientesContext } from "../../contexts/clientes.context";

const defaultFormFields = {
    nombreDelCliente: '',
    id: '',
    email: '',
    telefono: '',
    tipoDeTarjeta: '',
}


const ClientesForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { nombreDelCliente, id, email, telefono, tipoDeTarjeta} = formFields;
    const { clienteAgregado, clientes } = useContext(ClientesContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const createObject = (nombre, id,email,telefono,tipoDeTarjeta) => {
        return(
            {
                nombreDelCliente: nombre,
                id: id,
                email: email,
                telefono: telefono,
                tipoDeTarjeta: tipoDeTarjeta
            }
        );
    }

    const agregarCliente = () => {
            console.log(createObject(nombreDelCliente,id,email,telefono,tipoDeTarjeta));
            clienteAgregado(createObject(nombreDelCliente,id,email,telefono,tipoDeTarjeta));
            console.log(clientes);
            resetFormFields();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setFormFields({...formFields,[name]: value})
    };
        
    return (
            <div className="clientes-form-container">
                <samp>Introduce todos los datos para agregar a un nuevo cliente</samp>
                <form onSubmit={agregarCliente}>
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
                    <Button type='submit'>
                        Agregar
                    </Button>
                </form>
            </div>
    );
};

export default ClientesForm;