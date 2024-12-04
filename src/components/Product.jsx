import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/Product.module.css';

const products = [
    {
        id: 1,
        image: '/img/sale4.png',
        name: 'Secateurs',
        description:
            'This high-quality everyday secateur features a fully hardened and tempered, high-carbon steel blade for lasting sharpness. For comfort, the robust but lightweight alloy handles are covered in a soft grip, in a bright terracotta colour for maximum visibility in the garden. It won’t be easy to leave this pruner behind at the end of the day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.',
        currentPrice: 199,
        oldPrice: 240,
        discount: 17,
    },
    {
        id: 2,
        image: '/img/collection.png',
        name: 'Collection for berries (plastic)',
        description: 'Какая-то переноска для кота',
        currentPrice: 26,
        oldPrice: 35,
        discount: 26,
    },
    {
        id: 3, image: '/img/gloves.png',
        name: 'Gloves',
        description: 'перчатки типа.',
        currentPrice: 9,
        oldPrice: 14,
        discount: 36
    },
    {
        id: 4, image: '/img/shaped.png',
        name: 'Sickle-shaped hacksaw',
        description: 'Durable plastic container for berries. Lightweight and perfect for harvesting.',
        currentPrice: 155,
        oldPrice: null,
        discount: null
    },
    {
        id: 5, image: '/img/shovel.png',
        name: 'Bayonet shovel',
        description: 'Durable plastic container for berries. Lightweight and perfect for harvesting.',
        currentPrice: 180,
        oldPrice: null,
        discount: null
    },
    {
        id: 6, image: '/img/pitchfork.png',
        name: 'Garden pitchfork',
        description: 'Durable plastic container for berries. Lightweight and perfect for harvesting.',
        currentPrice: 179,
        oldPrice: null,
        discount: null
    },
    {
        id: 7, image: '/img/barbell.png',
        name: 'Barbell',
        description: 'Durable plastic container for berries. Lightweight and perfect for harvesting.',
        currentPrice: 12,
        oldPrice: null,
        discount: null
    },
    {
        id: 8, image: '/img/thermometer.png',
        name: 'Souvenir thermometer',
        description: 'Durable plastic container for berries. Lightweight and perfect for harvesting.',
        currentPrice: 98,
        oldPrice: 120,
        discount: 18
    },
    {
        id: 9, image: '/img/sale1.png',
        name: 'Decorative forged bridge',
        description: 'Durable plastic container for berries. Lightweight and perfect for harvesting.',
        currentPrice: 500,
        oldPrice: 1000,
        discount: 50
    },
    {
        id: 10, image: '/img/sale2.png',
        name: 'Flower basket',
        description: 'Durable plastic container for berries. Lightweight and perfect for harvesting.',
        currentPrice: 100,
        oldPrice: 150,
        discount: 34
    },
    {
        id: 11, image: '/img/sale3.png',
        name: 'Aquarium lock',
        description: 'Durable plastic container for berries. Lightweight and perfect for harvesting.',
        currentPrice: 150,
        oldPrice: 200,
        discount: 25
    },
];

function Product({ cart, setCart }) {
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity(quantity + 1);

    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleAddToCart = () => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className={styles.productPage}>
            <div className={styles.productContainer}>
                <div className={styles.imageContainer}>
                    <img src={product.image} alt={product.name} className={styles.productImage} />
                </div>

                <div className={styles.detailsContainer}>
                    <h1 className={styles.productName}>{product.name}</h1>
                    <div className={styles.prices}>
                        <span className={styles.currentPrice}>${product.currentPrice}</span>
                        {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
                        {product.discount && <span className={styles.discountBadge}>{`-${product.discount}%`}</span>}
                    </div>

                    <div className={styles.quantityControls}>
                        <button className={styles.quantityButton} onClick={handleDecrement} disabled={quantity <= 1}>-</button>
                        <span className={styles.quantityValue}>{quantity}</span>
                        <button className={styles.quantityButton} onClick={handleIncrement}>+</button>
                    </div>

                    <button className={styles.addToCartButton} onClick={handleAddToCart}>Add to cart</button>

                    <div className={styles.description}>
                        <h3>Description</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;