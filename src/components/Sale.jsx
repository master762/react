import React from 'react';
import styles from './styles/Sale.module.css';
import { Link } from 'react-router-dom';

function Sale() {
    return (
        <section>

            <div className={`${styles['categories-top']} ${styles.container}`}>
                <p className={styles.textChapter}>Sale</p>
                <div className={styles['categories-line']}></div>
                <Link to="/all-sales">
                    <button className={styles['categories-nav']}>
                        <p>All Sales</p>
                    </button>
                </Link>
            </div>

            <div className={`${styles.productGrid} ${styles.container}`}>
                <div className={styles.productCard}>
                    <div className={styles.discountBadge}>
                        <p>-50%</p>
                    </div>
                    <img src="/img/sale1.png" alt="Decorative forged bridge" className={styles.productImage} />
                    <h3 className={styles.productName}>
                        <p>Decorative forged bridge</p>
                    </h3>
                    <div className={styles.productPrices}>
                        <span className={styles.currentPrice}>
                            <p>$500</p>
                        </span>
                        <span className={styles.oldPrice}>
                            <p>$1000</p>
                        </span>
                    </div>
                    <button className={styles.addToCartButton}>Add to cart</button>
                </div>
                <div className={styles.productCard}>
                    <div className={styles.discountBadge}>
                        <p>-34%</p>
                    </div>
                    <img src="/img/sale2.png" alt="Flower basket" className={styles.productImage} />
                    <h3 className={styles.productName}>
                        <p>Flower basket</p>
                    </h3>
                    <div className={styles.productPrices}>
                        <span className={styles.currentPrice}>
                            <p>$100</p>
                        </span>
                        <span className={styles.oldPrice}>
                            <p>$150</p>
                        </span>
                    </div>
                    <button className={styles.addToCartButton}>Add to cart</button>
                </div>

                <div className={styles.productCard}>
                    <div className={styles.discountBadge}>
                        <p>-25%</p>
                    </div>
                    <img src="/img/sale3.png" alt="Aquarium lock" className={styles.productImage} />
                    <h3 className={styles.productName}>
                        <p>Aquarium lock</p>
                    </h3>
                    <div className={styles.productPrices}>
                        <span className={styles.currentPrice}>
                            <p>$150</p>
                        </span>
                        <span className={styles.oldPrice}>
                            <p>$200</p>
                        </span>
                    </div>
                    <button className={styles.addToCartButton}>Add to cart</button>
                </div>

                <div className={styles.productCard}>
                    <div className={styles.discountBadge}>
                        <p>-17%</p>
                    </div>
                    <img src="/img/sale4.png" alt="Secateurs" className={styles.productImage} />
                    <h3 className={styles.productName}>
                        <p>Secateurs</p>
                    </h3>
                    <div className={styles.productPrices}>
                        <span className={styles.currentPrice}>
                            <p>$199</p>
                        </span>
                        <span className={styles.oldPrice}>
                            <p>$240</p>
                        </span>
                    </div>
                    <button className={styles.addToCartButton}>Add to cart</button>
                </div>

            </div>
        </section>
    );
};



export default Sale;