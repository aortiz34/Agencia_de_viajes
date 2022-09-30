
import { useContext } from "react";
import { EmpleadosContext } from "../../contexts/empleados.context";
import { Link } from "react-router-dom";

import Button from "../../components/button/button.component";
import EmpleadoCard from "../../components/empleado-card/empleados-card.component";

const Empleados = () => {

    const { empleados } = useContext(EmpleadosContext);

    return (
        <div>
            <Button>
                <Link to="agregar-empleado">Agregar nuevo trabajador</Link>
            </Button>
            <div className="empleados-catalogue-container">
                {empleados.map((empleado) => (
                    <EmpleadoCard key={empleado.idEmpleado} empleado={empleado} />
                ))} 
            </div>
        </div>
    );
};

export default Empleados;