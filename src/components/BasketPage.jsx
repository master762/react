import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/BasketPage.module.css';

function BasketPage({ cart, setCart }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleQuantityChange = (id, delta) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const handleOrder = () => {
        setModalVisible(true);
        // Очищаем корзину после подтверждения заказа
        setCart([]);
    };

    const isEmpty = cart.length === 0;

    return (
        <section>
            <div className="container">
                {/* Заголовок корзины */}
                <div className={`${styles['categories-top']} ${styles.container}`}>
                    <p className={styles.textChapter}>Shopping cart</p>
                    <div className={styles['categories-line']}></div>
                    <Link to="/all-products">
                        <button className={styles['categories-nav']}>
                            <p>Back to the store</p>
                        </button>
                    </Link>
                </div>

                {isEmpty ? (
                    // Если корзина пуста
                    <div className={styles.emptyCart}>
                        <p className={styles['looks']}>
                            Looks like you have no items in your basket currently.
                        </p>
                        <Link to="/all-products">
                            <button className={styles['ContinueButton']}>Continue Shopping</button>
                        </Link>
                    </div>
                ) : (
                    // Если в корзине есть товары
                    <div className={styles.cartContainer}>
                        <div className={styles.cartItems}>
                            {cart.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className={styles.cartItemImage}
                                    />
                                    <div className={styles.cartItemDetails}>
                                        <p>{item.name}</p>
                                        {item.oldPrice && (
                                            <span className={styles.oldPrice}>
                                                ${item.oldPrice}
                                            </span>
                                        )}
                                    </div>
                                    <div className={styles.cartActions}>
                                        <div className={styles.quantityControls}>
                                            <button
                                                className={styles.quantityButton}
                                                onClick={() =>
                                                    handleQuantityChange(item.id, -1)
                                                }
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className={styles.quantityValue}>
                                                {item.quantity}
                                            </span>
                                            <button
                                                className={styles.quantityButton}
                                                onClick={() =>
                                                    handleQuantityChange(item.id, 1)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                        <p className={styles.price}>
                                            ${item.quantity * item.currentPrice}
                                        </p>
                                    </div>
                                    <button
                                        className={styles.removeButton}
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className={styles.orderDetails}>
                            <h3>Order details</h3>
                            <p>{cart.reduce((acc, item) => acc + item.quantity, 0)} items</p>
                            <p className={styles.totalPrice}>
                                ${cart.reduce(
                                    (acc, item) => acc + item.quantity * item.currentPrice,
                                    0
                                ).toFixed(2)}
                            </p>
                            <form className={styles.orderForm} onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Name" required />
                                <input type="text" placeholder="Phone number" required />
                                <input type="email" placeholder="Email" required />
                                <button type="button" onClick={handleOrder}>
                                    Order
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>

            {/* Модальное окно */}
            {isModalVisible && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setModalVisible(false)}
                        >
                            ×
                        </button>
                        <p>
                            Congratulations! <br /> Your order has been successfully placed on the website.
                            A manager will contact you shortly to confirm your order.
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default BasketPage;
