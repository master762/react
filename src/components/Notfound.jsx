import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Notfound.module.css';

function Notfound() {
    return (
        <section>
            <div className={styles.logo}>
                <div className={styles.flex}>
                    <p className={styles.four}>4</p>
                    <img src="/img/notfound.png" alt="Cart Icon" />
                    <p className={styles.four}>4</p>
                </div>
                <p className='textChapter'>Page Not Found</p>
                <p className={styles.text}>We’re sorry, the page you requested could not be found.
                    Please go back to the homepage.</p>
                <Link to="/">
                    <button className={styles.greenBtn}>Go Home</button>
                </Link>
            </div>
        </section>
    )
};



export default Notfound;