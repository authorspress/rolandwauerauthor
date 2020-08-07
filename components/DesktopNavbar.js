import React, { Component } from "react";

import "../styles/desktop-navbar.scss";

export default class DesktopNavbar extends Component {
    render() {
        return (
            <div className="dp-navbar-flex-container">
                <div
                    className={`desktop-navbar-container desktop-navbar-container--styles`} >
                    <a href="#home" className={`dp-link dp-link--styles`}>Home</a>
                    <a href="#books" className={`dp-link dp-link--styles`}>Books</a>
                    <a href="#author" className={`dp-link dp-link--styles`}>Author</a>
                    <a href="#contact" className={`dp-link dp-link--styles`}>Contact</a>
                </div>
                <div className="author-name-container">
                    <h1 className="author-name author-name--styles">
                        Roland H. Wauer
                    </h1>
                </div>
            </div>
        );
    }
}

