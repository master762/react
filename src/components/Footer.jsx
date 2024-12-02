import React from 'react';
import styles from './styles/Footer.module.css';

function Footer() {
    return (

        <footer>
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


            <div className={`${styles.cart} ${styles.container}`}><iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A3633ea53b0e701e75f93cf07ce8dbca8031017e48dcebdf054311456457dd743&amp;source=constructor"
                width="1280" height="350" frameborder="0"></iframe>
            </div>
        </footer>
    );
};



export default Footer;