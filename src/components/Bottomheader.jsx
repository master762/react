import React from 'react';
import styles from './styles/Bottomheader.module.css';

function Caregory() {
    return (
        <section>
            <div className={styles.bgImg}>
                <div className={styles.container}>
                    <p className={styles.imageText}>
                        Amazing Discounts <br /> on Garden Products!
                    </p>
                    <button className={`${styles.greenBtn} ${styles.container}`}>
                        Check out
                    </button>
                </div>
            </div>
        </section>
    );
};



export default Caregory;