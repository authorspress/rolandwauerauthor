import "../styles/about-book.scss";

export default function AboutBook() {
    return (
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
    )
}