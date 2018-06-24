import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <div className='navbar-wrapper'>
        <div className='navbar'>

            <div className='navbar-icon'></div>

            <nav role='navigation' className='navbar-list'>
                <Link to='/' className='navbar-item navbar-item__link'>Home</Link>
                <Link to='/races' className='navbar-item navbar-item__link'>Races List</Link>
            </nav>

        </div>
    </div>
);

export default NavBar