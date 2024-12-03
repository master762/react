import React from 'react';
import styles from './styles/Filter.module.css';
function Filter() {
    return (

        <div className='container'>
            <div className={`${styles['filterContainer']} ${styles.container}`} >
                <div className={styles.filterSection}>
                    <label htmlFor="price-from">Price from</label>
                    <input type="number" id="price-from" placeholder="From" />
                </div>
                <div className={styles.filterSection}>
                    <label htmlFor="price-to">Price to</label>
                    <input type="number" id="price-to" placeholder="To" />
                </div>
                <div className={styles.filterSection}>
                    <label htmlFor="discounted-items">Discounted items</label>
                    <input type="checkbox" id="discounted-items" />
                </div>
                <div className={styles.filterSection}>
                    <label htmlFor="sort-by">Sorted by</label>
                    <select id="sort-by">
                        <option value="default">by default</option>
                        <option value="price-asc">newest</option>
                        <option value="price-desc">price: high-low</option>
                        <option value="discount-desc">price: low-high</option>
                    </select>
                </div>
            </div>
        </div>
    );
};



export default Filter;