import React, { useState, useEffect } from 'react';

import "../styles/book.scss"

export default function Book() {
    const [img, setImg] = useState("/book.jpg");

    return (
        <div className="book-flex" style={{
            backgroundImage: "url(" + "/foggyMt.jpg" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <div className="overlay"></div>
            <div id="books" className="book-container">
                <div className="book-left-child">
                    <div className="book-cover-container">
                        <h2 className="book-cover-title book-cover-title--styles">Natural Inclination</h2>
                        <h3 className="book-cover-sub-title book-cover-sub-title--styles">
                            ONE MANS ADVENTURE IN THE NATURAL WORLD
                    </h3>
                        <h3 className="get-copy get-copy--styles">
                            Get A Copy!
                    </h3>
                    </div>
                    <div className="purchase-links-flex">
                        <div className="purchase-links-grid">
                            <a href="https://www.amazon.com/Roland-Wauer-Wild-Life-Adventures/dp/B00SCUGVRG" className="purchase-link purchase-link--styles">PAPERBACK | $7.99</a>
                            <a href="https://www.amazon.com/Natural-Inclinations-Mans-Adventures-World/dp/194973501X/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1593032122&sr=1-2" className="purchase-link purchase-link--styles">HARDCOVER | $17.99</a>
                        </div>
                    </div>
                </div>
                <div className="book-right-child">
                    <div className="book-img-container">
                        <a href="https://www.amazon.com/Natural-Inclinations-Mans-Adventures-World/dp/1949735001/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1593032122&sr=1-2" className="">
                            <img src={img} alt="My Wild Life by Roland H. Wauer" className="book-img" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}