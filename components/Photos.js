import "../styles/photo-gallery.scss";

export default function Photos() {
    const numPhotos = [1, 2];
    const piclist = numPhotos.map((num) =>
        <img className="pic" src={"/pic" + num + ".jpg"} alt="photo author out in the wild" />
    );
    console.log(piclist);
    return (
        <div className="photos-container">
            <div className="photo-gallery-title photo-gallery-title--styles">
                Photo Gallery:
                </div>
            <div className="photos-grid photos-grid--styles">
                {piclist}
            </div>
        </div>
    )
}