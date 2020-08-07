import React, { Component } from "react";
import Link from "next/link";
import "../styles/navbar.scss";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
    }

    render() {
        let hide = "hide";
        let clicked = this.props.burgerClicked;
        if (clicked) {
            hide = "grid";
        }
        return (
            <div
                className={`${hide} navbar-container navbar-container--styles`}
            >
                <a href="#home" className={`link link--styles`}>Home</a>
                <a href="#books" className={`link link--styles`}>Books</a>
                <a href="#author" className={`link link--styles`}>Author</a>
                <a href="#contact" className={`link link--styles`}>Contact</a>
            </div>
        );
    }
}

