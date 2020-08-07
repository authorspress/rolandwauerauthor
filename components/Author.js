import "../styles/author.scss";

export default function Author() {
    return (
        <div id="author" className="author-container author-container--styles">
            <div className="author-center">
                <div className="author-img-container">
                    <img className="author-img" src="/rolanheadpic.jpg" alt="george orwell picture smoking cigarette" />
                </div>
            </div>
            <div className="summary-container">
                <p className="summary summary--styles">
                    Roland H. Wauer retired from the National Park Service in 1989, after a 32-year career as a park ranger at Crater Lake National Park(NP), Death Valley NP, Pinnicales NM, Zion NP, and Big Bend NP; Southwest Region Chief Scientist (1972-79), and Chief of Natural Resources in the Washington, DC Office (1972-83). During the later period he coordinated two NPS State of the Parks reports, developed the Service-wide Natural Resources Management Trainee Program, and served as Chairman of the Interagency Grizzly Bear Steering Committee.
                </p>
            </div>
        </div>
    )
}