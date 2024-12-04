import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Sale.module.css';

function AllProductsPage() {
    const toolsAndEquipment = [
        { id: 1, image: '/img/sale4.png', name: 'Secateurs', currentPrice: 199, oldPrice: 240, discount: 17 },
        { id: 2, image: '/img/collection.png', name: 'Collection for berries (plastic)', currentPrice: 26, oldPrice: 35, discount: 26 },
        { id: 3, image: '/img/gloves.png', name: 'Gloves', currentPrice: 9, oldPrice: 14, discount: 36 },
        { id: 4, image: '/img/shaped.png', name: 'Sickle-shaped hacksaw', currentPrice: 155, oldPrice: null, discount: null },
        { id: 5, image: '/img/shovel.png', name: 'Bayonet shovel', currentPrice: 180, oldPrice: null, discount: null },
        { id: 6, image: '/img/pitchfork.png', name: 'Garden pitchfork', currentPrice: 179, oldPrice: null, discount: null },
        { id: 7, image: '/img/barbell.png', name: 'Barbell', currentPrice: 12, oldPrice: null, discount: null },
        { id: 8, image: '/img/thermometer.png', name: 'Souvenir thermometer', currentPrice: 98, oldPrice: 120, discount: 18 },
        { id: 9, image: '/img/sale1.png', name: 'Decorative forged bridge', currentPrice: 500, oldPrice: 1000, discount: 50 },
        { id: 10, image: '/img/sale2.png', name: 'Flower basket', currentPrice: 100, oldPrice: 150, discount: 34 },
        { id: 11, image: '/img/sale3.png', name: 'Aquarium lock', currentPrice: 150, oldPrice: 200, discount: 25 },
    ];

    return (
        <section>
            <div className={`${styles.productGrid} ${styles.container}`}>
                {toolsAndEquipment.map((product) => (
                    <div className={styles.productCard} key={product.id}>
                        {product.discount && (
                            <div className={styles.discountBadge}>
                                <p>{`-${product.discount}%`}</p>
                            </div>
                        )}
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.productImage}
                        />
                        <h3 className={styles.productName}>
                            <p>{product.name}</p>
                        </h3>
                        <div className={styles.productPrices}>
                            <span className={styles.currentPrice}>
                                <p>${product.currentPrice}</p>
                            </span>
                            {product.oldPrice && (
                                <span className={styles.oldPrice}>
                                    <p>${product.oldPrice}</p>
                                </span>
                            )}
                        </div>
                        <Link to={`/product/${product.id}`} className={styles.addToCartButton}>
                            Add to cart
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AllProductsPage;
