import dynamic from "next/dynamic";
import React, { useContext } from "react";
import { SlideInfoContext } from "./Books";

const Book = dynamic(() => import("../components/Book"));

export default function Slide() {

    const sl = useContext(SlideInfoContext);

    return (
        <li id={"carousel__slide" + sl.current} tabindex="0" className="carousel__slide">
            <div className="carousel__snapper">
                <Book />
                <a href={"#carousel__slide" + sl.prev} className="carousel__prev">
                    Go to previous slide
                </a>
                <a href={"#carousel__slide" + sl.next} className="carousel__next">
                    Go to next slide
                </a>
            </div>
        </li>
    );
}