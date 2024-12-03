import React from 'react';
import Caregory from './Category';

const CaregoriesPage = () => {
    const categoriesImages = [
        { src: '/img/categories 1.jpg', alt: 'Fertilizer', text: 'Fertilizer' },
        { src: '/img/categories 2.jpg', alt: 'Protective products', text: 'Protective products and septic tanks' },
        { src: '/img/categories 3.jpg', alt: 'Planting material', text: 'Planting material' },
        { src: '/img/categories 4.jpg', alt: 'Tools and equipment', text: 'Tools and equipment' },
        { src: '/img/categories 5.png', alt: 'Pots and planters', text: 'Pots and planters' },
    ];

    return (
        <div style={{ marginTop: '116px' }}>
            <Caregory images={categoriesImages} />
        </div>
    );
};

export default CaregoriesPage;
