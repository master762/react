import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Filter.module.css';

function Filter() {
    const navigate = useNavigate();
    const [isDiscountedChecked, setIsDiscountedChecked] = useState(false);


    const handleDiscountedChange = (event) => {
        setIsDiscountedChecked(event.target.checked);
        if (event.target.checked) {
            navigate('/all-sales');
        } else {
            navigate(-1);
        }
    };

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
                    <input
                        type="checkbox"
                        id="discounted-items"
                        checked={isDiscountedChecked}
                        onChange={handleDiscountedChange}
                    />
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