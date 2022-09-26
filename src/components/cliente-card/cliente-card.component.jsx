import Button from "../button/button.component";

const ClienteCard = ({cliente}) => {

    const {nombreDelCliente, id, email, telefono, tipoDeTarjeta} = cliente;

    return(
        <div className="cliente-card-container">
            <samp>{nombreDelCliente}</samp><br/>
            <samp>{id}</samp><br/>
            <samp>{email}</samp><br/>
            <samp>{telefono}</samp><br/>
            <samp>{tipoDeTarjeta}</samp><br/>
            <Button>
                Editar
            </Button>
            <br/>
        </div>
    );
}

export default ClienteCard;