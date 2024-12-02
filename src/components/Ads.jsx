import React, { useState } from 'react';
import styles from './styles/Ads.module.css';

function Ads() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleDiscountClick = () => {
        if (!name || !phone || !email) {
            alert("Пожалуйста, заполните все поля!");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Пожалуйста, введите действительный адрес электронной почты!");
            return;
        }

        alert(`Спасибо, ${name}!
Ваш код скидки будет отправлен на ${email}.`);
        setName("");
        setPhone("");
        setEmail("");
    };
    return (
        <section>
            <div className={`${styles.addBunner} ${styles.container}`}>
                <p>5% off on the first order</p>
                <div className={styles.adsFlex}>
                    <img src="/img/add.png" alt="Advertisement" />
                    <div className={styles.adsInput}>
                        <input
                            className={styles.styleInputAds}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className={styles.styleInputAds}
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <input
                            className={styles.styleInputAds}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleDiscountClick}>Get a discount</button>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Ads;