import FormInput from "../form-input/form-input.components";
import { useState } from "react";

const defaultFormFields = {
    nombreDelCliente: '',
    email: '',
    telefono: '',
    tipoDeTarjeta: '',
}

const ClientesForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
   const { nombreDelCliente, email, telefono, tipoDeTarjeta} = formFields;

   const resetFormFields = () => {
    setFormFields(defaultFormFields);
   }

   const handleChange = (event) => {
    const {name, value} = event.target;
    
    setFormFields({...formFields,[name]: value})
};
    return (
        <div className="clientes-form">
            <samp>Introduce todos los datos para agregar a un nuevo cliente</samp>
            <form>
                <FormInput
                label='Nombre del cliente'
                type='text'
                required
                onChange={handleChange}
                name='nombreDelCliente'
                value={nombreDelCliente}
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
            </form>
        </div>
    );
};

export default ClientesForm;