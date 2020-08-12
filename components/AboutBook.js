import "../styles/about-book.scss";

export default function AboutBook() {
    return (
        <>
            <div className="about-book-container">
                <div className="left-child">
                    <h2 className="about-book-title about-book-title--styles">
                        About the Books
            </h2>
                    <div className="about-book-summary-container">
                        <p className="about-book-summary about-book-summary--styles">
                            Natural Inclinations follows the adventures of Greg Steward from his youth in St. Croix in the Virgin Islands to New York City and his employment at the American Museum of Natural History where he becomes a member of a scientific expedition to Panama. That experience confirms his love for adventure and desire for more new and exotic places and wildlife. He then joins other scientific expeditions to such distant places as the Galapagos, Easter Island, the Societies, and the Marquesas Islands.
                </p>
                    </div>
                </div>
                <div className="right-child">
                    <div className="about-book-img-container">
                        <img src="/book.jpg" alt="Natural Inclination" className="about-book-img" />
                    </div>
                </div>
            </div>
            <div className="availability-container">
                <h2 className="availability-title availability-title--styles">Available at:</h2>
                <div className="places-flex-center">
                    <div className="available-places-container">
                        <div className="amazon-available">
                            <a href="https://www.amazon.com/Natural-Inclinations-Mans-Adventures-World/dp/1949735001/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1593034956&sr=1-2" className="place-link">
                                <img className="place-img" src="/amazon-logo.png" alt="amazon link to book" />
                            </a>
                        </div>

                        <div className="ebay-available">
                            <a href="https://www.ebay.ph/itm/Natural-Inclinations-One-Mans-Adventures-in-the-Natural-World-Wauer/333486406412?hash=item4da556bb0c:g:iWgAAOSwbLJeJXZw" className="place-link">
                                <img className="place-img" src="/ebay-logo.png" alt="ebay link to book" />
                            </a>
                        </div>

                        <div className="book-depo-available">
                            <a href="https://www.bookdepository.com/Natural-Inclinations-Roland-H-Wauer/9781949735000?ref=grid-view&qid=1593044786858&sr=1-4" className="place-link">
                                <img className="place-img" src="/bok-depositorylogo.png" alt="boook depository link to book" />
                            </a>
                        </div>

                        <div className="bam-available">
                            <a href="https://www.booksamillion.com/p/Natural-Inclinations/Roland-H-Wauer/9781949735000?id=7930448723984#" className="place-link">
                                <img className="place-img" src="/bam-logo.png" alt="books a million link to book" />
                            </a>
                        </div>

                        <div className="indigo-available">
                            <a className="place-link" href="https://www.chapters.indigo.ca/en-ca/books/natural-inclinations-one-mans-adventures/9781949735000-item.html?ikwid=Natural+Inclinations%3a+One&ikwsec=Home&ikwidx=1#algoliaQueryId=bdd17992c93e576d5f28c417b308ac98">
                                <img className="place-img" src="/indigo-logo.png" alt="indigo link to book" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}