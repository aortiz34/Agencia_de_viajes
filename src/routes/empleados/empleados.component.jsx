
import { useContext } from "react";
import { EmpleadosContext } from "../../contexts/empleados.context";
import { Link } from "react-router-dom";

import Button from "../../components/button/button.component";
import EmpleadoCard from "../../components/empleado-card/empleado-card.component";
import './empleados.styles.scss';

const Empleados = () => {

    const { empleados } = useContext(EmpleadosContext);

    return (
        <div className="empleados-catalogue-wrapper container">
            <Link className="empleados-catalogue-link" to="/empleados/agregar-empleado">
                <Button tabIndex="-1">
                    Agregar nuevo Empleado
                </Button>
            </Link>
            <div className="empleados-catalogue">
                <header className="empleados-catalogue-header-container">
                    <div className="empleados-catalogue-header">
                        <span className="empleados-catalogue-id">ID</span>
                        <span className="empleados-catalogue-name">Nombre</span>
                        <span className="empleados-catalogue-email">Email</span>
                        <span className="empleados-catalogue-phone">Teléfono</span>
                        <span className="empleados-catalogue-area">Área</span>
                    </div>
                </header>
                <div className="empleados-catalogue-container">
                    {empleados.map((empleado) => (
                        <EmpleadoCard key={empleado.idEmpleado} empleado={empleado} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Empleados;