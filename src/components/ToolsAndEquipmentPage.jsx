import React from 'react';
import styles from './styles/Sale.module.css';
import { Link } from 'react-router-dom';

function ToolsAndEquipmentPage() {
    const toolsAndEquipment = [
        {
            id: 1, // Добавлено поле id
            image: '/img/sale4.png',
            name: 'Secateurs',
            currentPrice: 199,
            oldPrice: 240,
            discount: 17,
        },
        {
            id: 2,
            image: '/img/collection.png',
            name: 'Collection for berries (plastic)',
            currentPrice: 26,
            oldPrice: 35,
            discount: 26,
        },
        {
            id: 3,
            image: '/img/gloves.png',
            name: 'Wrench set',
            currentPrice: 9,
            oldPrice: 14,
            discount: 36,
        },
        {
            id: 4,
            image: '/img/shaped.png',
            name: 'Sickle-shaped hacksaw',
            currentPrice: 155,
            oldPrice: null,
            discount: null,
        },
        {
            id: 5,
            image: '/img/shovel.png',
            name: 'Bayonet shovel',
            currentPrice: 180,
            oldPrice: null,
            discount: null,
        },
        {
            id: 6,
            image: '/img/pitchfork.png',
            name: 'Garden pitchfork',
            currentPrice: 179,
            oldPrice: null,
            discount: null,
        },
        {
            id: 7,
            image: '/img/barbell.png',
            name: 'Barbell',
            currentPrice: 12,
            oldPrice: null,
            discount: null,
        },
        {
            id: 8,
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
                        {/* Ссылка на компонент Product */}
                        <Link to={`/product/${product.id}`} className={styles.addToCartButton}>
                            Add to card
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ToolsAndEquipmentPage;
