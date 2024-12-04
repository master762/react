import React from 'react';
import styles from './styles/Header.module.css';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
    return (
        <header className={styles.container}>
            <div className={styles.home}>
                <Link to="/">
                    <img src="/img/logo.jpg" alt="Logo" />
                </Link>
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
                <div className={styles.cartContainer}>
                    <Link to="/basket">
                        <img src="/img/icon.jpg" alt="Cart Icon" />
                    </Link>
                    {cartCount > 0 && (
                        <span className={styles.cartCount}>{cartCount}</span>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
