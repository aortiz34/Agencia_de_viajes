import { Fragment } from 'react';
import {Outlet, Link} from 'react-router-dom';

import './navBar.styles.scss';

const NavBar = () => {
    return (
        <Fragment>
            <div className='navBar'>
                <Link className='nav-link' to='/'>
                    <samp>Trabajadoes</samp>
                </Link>
                <Link className='nav-link' to='/'>
                    <samp>Hoteles</samp>
                </Link>
                <Link className='nav-link' to='/'>
                    <samp>Destinos</samp>
                </Link>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default NavBar;