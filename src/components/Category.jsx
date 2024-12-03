import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import styles from './styles/Category.module.css';

function Caregory({ images, isCategoriesPage, hideCategoryControls }) {
    return (
        <section className={styles.categoriesSection}>
            <div className={`${styles['categories-top']} ${styles.container}`}>
                <p className={styles.textChapter}>Categories</p>

                {/* Условие для скрытия кнопки и линии на странице категорий */}
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
                        <img
                            src={image.src}
                            alt={image.alt}
                            className={isCategoriesPage ? styles.categoryImage : ''} // Применяем стиль только на странице категорий
                        />
                        <p className={styles.defultText}>{image.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Caregory;
