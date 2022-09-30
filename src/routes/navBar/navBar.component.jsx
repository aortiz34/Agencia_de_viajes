import { Fragment } from 'react';
import {Outlet, NavLink} from 'react-router-dom';

import './navBar.styles.scss';

const NavBar = () => {
    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-content container">
                    <NavLink className="navbar-link" to="/">
                        <h1 className="navbar-header">La agencia</h1>
                    </NavLink>
                    <div className="navbar-links">
                        <NavLink className="navbar-link" to="/empleados">
                            <span>Empleados</span>
                        </NavLink>
                        <NavLink className="navbar-link" to="/destinos">
                            <span>Destinos</span>
                        </NavLink>
                        <NavLink className="navbar-link" to="/clientes">
                            <span>Clientes</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
            <Outlet />
        </Fragment>
    );
};

export default NavBar;