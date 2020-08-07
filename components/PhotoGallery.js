import Gallery from "react-photo-gallery";

import "../styles/photo-gallery.scss";

import { photoset } from "./photoset";

export default function Photos() {

    return (
        <div className="photos-container">
            <div className="photo-title-container photo-title-container--styles">
                <div className="photo-gallery-title photo-gallery-title--styles">
                    Photo Gallery:
                </div>
            </div>
            <Gallery photos={photoset} />
        </div>
    )
}