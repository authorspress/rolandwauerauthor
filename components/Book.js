import React, { useState, useEffect } from 'react';

import "../styles/book.scss"

export default function Book() {
    const [img, setImg] = useState("/book.jpg");

    return (
        <div id="books" className="book-container">
            <div className="book-img-container">
                <a href="https://www.amazon.com/Natural-Inclinations-Mans-Adventures-World/dp/1949735001/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1593032122&sr=1-2" className="">
                    <img src={img} alt="My Wild Life by Roland H. Wauer" className="book-img" />
                </a>
            </div>
            <div className="purchase-links-flex">
                <div className="purchase-links-grid">
                    <a href="https://www.amazon.com/Roland-Wauer-Wild-Life-Adventures/dp/B00SCUGVRG" className="purchase-link purchase-link--styles">PAPERBACK | $7.99</a>
                    <a href="https://www.amazon.com/Natural-Inclinations-Mans-Adventures-World/dp/194973501X/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1593032122&sr=1-2" className="purchase-link purchase-link--styles">HARDCOVER | $17.99</a>
                </div>
            </div>
        </div>
    )
}