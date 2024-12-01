import React from 'react';
import styles from './styles/Header.module.css'; // Подключение CSS модуля

function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.home}>
                <img src="/img/logo.jpg" alt="Logo" />
                <nav>
                    <ul className={styles.navList}>
                        <li>
                            <a className={styles.styled} href="#">Main Page</a>
                        </li>
                        <li>
                            <a className={styles.styled} href="#">Categories</a>
                        </li>
                        <li>
                            <a className={styles.styled} href="#">All products</a>
                        </li>
                        <li>
                            <a className={styles.styled} href="#">All sales</a>
                        </li>
                    </ul>
                </nav>
                <img src="/img/icon.jpg" alt="Icon" />
            </div>
        </header>
    );
};



export default Header;
