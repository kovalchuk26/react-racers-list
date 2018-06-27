import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/NavBar.css';

const NavBar = () => (
    <div className={styles.wrapper}>
        <div className={styles.navbar}>

            <div className={styles.icon}></div>

            <nav role='navigation' className={styles.list}>
                <Link to='/' className={styles.link}>Home</Link>
                <Link to='/races' className={styles.link}>Races List</Link>
            </nav>

        </div>
    </div>
);

export default NavBar