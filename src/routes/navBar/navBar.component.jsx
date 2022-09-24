import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';

import './navBar.styles.scss';

const NavBar = () => {
    return (
        <Fragment>
            <div className='navBar'>
                <Link className='nav-link' to='/trabajadores'>
                    <samp>Trabajadores</samp>
                </Link>
                <Link className='nav-link' to='/destinos'>
                    <samp>Destinos</samp>
                </Link>
                <Link className='nav-link' to='/'>
                    <samp>Clientes</samp>
                </Link>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default NavBar;