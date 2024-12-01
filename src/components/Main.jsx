import React from 'react';
import styles from './styles/Main.module.css'; // Подключение CSS модуля

function Main() {
    return (
        <main>
            {/* картинка, текст, кнопка */}
            <section>
                <div className={styles.bgImg}>
                    <div className={styles.container}>
                        <p className={styles.imageText}>
                            Amazing Discounts <br /> on Garden Products!
                        </p>
                        <button className={`${styles.greenBtn} ${styles.container}`}>
                            Check out
                        </button>
                    </div>
                </div>
            </section>
            {/* категории */}
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
            {/* реклама */}
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
                            />
                            <input
                                className={styles.styleInputAds}
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone number"
                            />
                            <input
                                className={styles.styleInputAds}
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                            <button>Get a discount</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* блок товаров */}
            <div className={`${styles['categories-top']} ${styles.container}`}>
                <p className={styles.textChapter}>Sale</p>
                <div className={styles['categories-line']}></div>
                <button className={styles['categories-nav']}>
                    <p>All Sales</p>
                </button>
            </div>

            <div className={`${styles.productGrid} ${styles.container}`}>
                <div className={styles.productCard}>
                    <a href="#">
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
                    </a>
                </div>

                <div className={styles.productCard}>
                    <a href="#">
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
                    </a>
                </div>

                <div className={styles.productCard}>
                    <a href="#">
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
                    </a>
                </div>

                <div className={styles.productCard}>
                    <a href="#">
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
                    </a>
                </div>

            </div>
            {/* контакты */}
            <section>
                <div className={styles.container}>
                    <div className={styles.leftContact}>
                        <p className={styles.textChapter}>Contact</p>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.bigBanner}>
                            <p>Phone</p>
                            <p className={styles.infoTxt}>+7 (499) 350-66-04</p>
                        </div>
                        <div className={styles.banner}>
                            <p>Socials</p>
                            <div className={styles.icons}>
                                <a href="#">
                                    <img src="/img/ic-instagram.png" alt="Instagram" />
                                </a>
                                <a href="#">
                                    <img src="/img/ic-whatsapp.png" alt="WhatsApp" />
                                </a>
                            </div>
                        </div>
                        <div className={styles.bigBanner}>
                            <p>Address</p>
                            <p className={styles.infoTxt}>
                                Dubininskaya Ulitsa, 96, Moscow,<br /> Russia, 115093
                            </p>
                        </div>
                        <div className={styles.banner}>
                            <p>Working</p>
                            <p className={styles.infoTxt}>24 hours a day</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* карта  */}
            <div className={`${styles.cart} ${styles.container}`}><iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A3633ea53b0e701e75f93cf07ce8dbca8031017e48dcebdf054311456457dd743&amp;source=constructor"
                width="1280" height="350" frameborder="0"></iframe>
            </div>

        </main>
    );
};

export default Main;
