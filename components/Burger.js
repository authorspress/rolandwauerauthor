import React, { Component } from "react";
import styles from "../styles/burger.scss";

export class Burger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
            fade: "",
            clicked: false,
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        console.log("clicked");
        if (!this.state.clicked) {
            this.setState({
                open: "open",
                fade: "fade",
                clicked: true,
            });
            this.props.setBurgerClicked(true);
        } else if (this.state.clicked) {
            this.setState({
                open: "",
                fade: "",
                clicked: false,
            });
            this.props.setBurgerClicked(false);
        }
    }

    render() {
        return (
            <div id="home" className="bg-nav">
                <div className="burger-container">
                    <a
                        onClick={this.onClickHandler}
                        className={`${this.state.open} navicon-button burger burger--styles x`}
                    >
                        <div className="navicon"></div>
                    </a>
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

export default Burger;
