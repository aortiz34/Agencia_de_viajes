import FormInput from "../../form-input/form-input.components";
import Button from "../../button/button.component";
import { useState, useContext } from "react";
import { DestinosContext } from "../../../contexts/destinos.context";
import { useParams, useNavigate } from 'react-router-dom';

import '../form.styles.scss';

const defaultFormFields = {
    nombreDelDestino: '',
    idDestino: '',
    codigoPostal: ''
}

const DestinosForm = () => {
    const { destinoAgregado, destinoEditado, destinos } = useContext(DestinosContext);
    const params = useParams();
    const navigate = useNavigate();

    const currDestino =
        params.hasOwnProperty('idDestino')
            ? destinos.find(destino => destino.idDestino === params.idDestino)
            : null

    const [formFields, setFormFields] = useState(currDestino ?? defaultFormFields);
    const { nombreDelDestino, idDestino, codigoPostal } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const createObject = (nombre, id, codigoP) => {
        return (
            {
                nombreDelDestino: nombre,
                idDestino: id,
                codigoPostal: codigoP

            }
        );
    }

    const agregarDestino = (event) => {
        event.preventDefault();
        destinoAgregado(createObject(nombreDelDestino, idDestino, codigoPostal));
        navigate('/destinos');
    };

    const editarDestino = (event) => {
        event.preventDefault();
        destinoEditado(currDestino, createObject(nombreDelDestino, idDestino, codigoPostal));
        navigate('/destinos');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div className="destinos-form-container container">
            <p className="destinos-form-text">
                {
                    currDestino !== null
                    ? "Edita todos los campos necesarios del destino seleccionado"
                    : "Introduce todos los datos para agregar a un nuevo destino"
                }
            </p>
            <form
                onSubmit={currDestino !== null ? editarDestino : agregarDestino}
                className="destinos-form"
            >
                <FormInput
                    label='Nombre del destino'
                    type='text'
                    required
                    onChange={handleChange}
                    name='nombreDelDestino'
                    value={nombreDelDestino}
                />
                <FormInput
                    label='ID del destino'
                    type='number'
                    required
                    onChange={handleChange}
                    name='idDestino'
                    value={idDestino}
                />
                <FormInput
                    label='Código Postal'
                    type='number'
                    required
                    onChange={handleChange}
                    name='codigoPostal'
                    value={codigoPostal}
                />
                <div className='destinos-form-buttons'>
                    {
                        currDestino !== null
                            ? <Button className="destinos-form-button" type='submit'>Editar</Button>
                            : <Button className="destinos-form-button" type='submit'>Agregar</Button>
                    }
                    <Button className="destinos-form-button" onClick={resetFormFields} type='button'>Limpiar</Button>
                </div>

            </form>
        </div>
    );
};

export default DestinosForm;