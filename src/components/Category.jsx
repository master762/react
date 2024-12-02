import React from 'react';
import styles from './styles/Category.module.css';

function Caregory() {
    return (
        <section className={styles.categoriesSection}>
            <div className={`${styles['categories-top']} ${styles.container}`}>
                <p className={styles.textChapter}>Categories</p>
                <div className={styles['categories-line']}></div>
                <button className={styles['categories-nav']}>
                    <p>All categories</p>
                </button>
            </div>

            <div className={`${styles['categories-img']} ${styles.container}`}>
                <div className={styles.centerTxt}>
                    <img src="/img/categories 1.jpg" alt="Fertilizer" />
                    <p className={styles.defultText}>Fertilizer</p>
                </div>
                <div className={styles.centerTxt}>
                    <img src="/img/categories 2.jpg" alt="Protective products" />
                    <p className={styles.defultText}>Protective products and septic <br /> tanks</p>
                </div>
                <div className={styles.centerTxt}>
                    <img src="/img/categories 3.jpg" alt="Planting material" />
                    <p className={styles.defultText}>Planting material</p>
                </div>
                <div className={styles.centerTxt}>
                    <img src="/img/categories 4.jpg" alt="Tools and equipment" />
                    <p className={styles.defultText}>Tools and equipment</p>
                </div>
            </div>
        </section>
    );
};



export default Caregory;