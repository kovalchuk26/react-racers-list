import React from 'react';
import '../styles/NavBar.less'
import {Link} from 'react-router-dom';

const NavBar = () => (
        <div className='navbar-wrapper'>

            <div className='navbar navbar-container'>

                <div className='title'>Simple React App</div>

                <nav role='navigation' className='list'>
                    <Link to='/' className='item -link'>Home</Link>
                    <Link to='/races' className='item -link'>Races List</Link>
                </nav>

            </div>
        </div>
);

export default NavBar