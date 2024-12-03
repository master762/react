import React from 'react';
import styles from './styles/Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.home}>
                <img src="/img/logo.jpg" alt="Logo" />
                <nav>
                    <ul className={styles.navList}>
                        <li>
                            <Link className={styles.styled} to="/">Main Page</Link>
                        </li>
                        <li>
                            <Link className={styles.styled} to="/categories">Categories</Link>
                        </li>
                        <li>
                            <Link className={styles.styled} to="/all-products">All Products</Link>
                        </li>
                        <li>
                            <Link className={styles.styled} to="/all-sales">All Sales</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="/basket"> <img src="/img/icon.jpg" alt="Icon" /> </Link>
            </div>
        </header>
    );
}

export default Header;
