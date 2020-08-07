import React, { useState, useEffect } from 'react';

import "../styles/book.scss"

export default function Book() {
    const [img, setImg] = useState("/rolandbook2020.png");

    return (
        <div id="books" className="book-container">
            <div className="book-img-container">
                <a href="https://www.amazon.com/Roland-Wauer-Wild-Life-Adventures/dp/B00SCUGVRG" className="">
                    <img src={img} alt="My Wild Life by Roland H. Wauer" className="book-img" />
                </a>
            </div>
            <div className="purchase-links-flex">
                <div className="purchase-links-grid">
                    <a href="https://www.amazon.com/Roland-Wauer-Wild-Life-Adventures/dp/B00SCUGVRG" className="purchase-link purchase-link--styles">Amazon</a>
                    <a href="" className="purchase-link purchase-link--styles">Barnes & Nobles</a>
                </div>
            </div>
        </div>
    )
}