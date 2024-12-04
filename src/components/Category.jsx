import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Category.module.css';

function Caregory({ images, isCategoriesPage, hideCategoryControls }) {
    return (
        <section className={styles.categoriesSection}>
            <div className={`${styles['categories-top']} ${styles.container}`}>
                <p className={styles.textChapter}>Categories</p>


                {!hideCategoryControls && (
                    <>
                        <div className={styles['categories-line']}></div>
                        <Link to="/categories">
                            <button className={styles['categories-nav']}>
                                <p>All categories</p>
                            </button>
                        </Link>
                    </>
                )}
            </div>

            <div className={`${styles['categories-img']} ${styles.container}`}>
                {images.map((image, index) => (
                    <div className={styles.centerTxt} key={index}>
                        {image.link ? (
                            <Link to={image.link}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className={isCategoriesPage ? styles.categoryImage : ''}
                                />
                                <p className={styles.defultText}>{image.text}</p>
                            </Link>
                        ) : (
                            <>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className={isCategoriesPage ? styles.categoryImage : ''}
                                />
                                <p className={styles.defultText}>{image.text}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Caregory;
