import React from 'react';
import styles from './styles/Sale.module.css';

function ToolsAndEquipmentPage() {
    const toolsAndEquipment = [
        {
            image: '/img/sale4.png',
            name: 'Secateurs',
            currentPrice: 199,
            oldPrice: 240,
            discount: 17,
        },
        {
            image: '/img/collection.png',
            name: 'Collection for berries (plastic)',
            currentPrice: 26,
            oldPrice: 35,
            discount: 26,
        },
        {
            image: '/img/gloves.png',
            name: 'Wrench set',
            currentPrice: 9,
            oldPrice: 14,
            discount: 36,
        },
        {
            image: '/img/shaped.png',
            name: 'Sickle-shaped hacksaw',
            currentPrice: 155,
            oldPrice: null,
            discount: null,
        },
        {
            image: '/img/shovel.png',
            name: 'Bayonet shovel',
            currentPrice: 180,
            oldPrice: null,
            discount: null,
        },
        {
            image: '/img/pitchfork.png',
            name: 'Garden pitchfork',
            currentPrice: 179,
            oldPrice: null,
            discount: null,
        },
        {
            image: '/img/barbell.png',
            name: 'Barbell',
            currentPrice: 12,
            oldPrice: null,
            discount: null,
        },
        {
            image: '/img/thermometer.png',
            name: 'Souvenir thermometer',
            currentPrice: 98,
            oldPrice: 120,
            discount: 18,
        },
    ];

    return (
        <section>

            <div className={`${styles.productGrid} ${styles.container}`}>
                {/* Рендерим карточки с продуктами */}
                {toolsAndEquipment.map((product, index) => (
                    <div className={styles.productCard} key={index}>

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
                        <button className={styles.addToCartButton}>Add to cart</button>

                    </div>
                ))}
            </div>
        </section>
    );
}

export default ToolsAndEquipmentPage;

