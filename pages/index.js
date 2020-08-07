import React, { Component } from "react";

import Head from 'next/head'
import dynamic from 'next/dynamic'
import '../styles/home.scss'

const Layout = dynamic(() => import("../components/Layout"));
const Burger = dynamic(() => import("../components/Burger"));
const Navbar = dynamic(() => import("../components/Navbar"));
const Book = dynamic(() => import("../components/Book"));
const Author = dynamic(() => import("../components/Author"));
const Contact = dynamic(() => import("../components/Contact"));
const DesktopNavbar = dynamic(() => import("../components/DesktopNavbar"));
const Gallery = dynamic(() => import("../components/Gallery"));

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerClicked: false,
    };
    this.setBurgerClicked = this.setBurgerClicked.bind(this);
  }

  setBurgerClicked(clicked) {
    //console.log(clicked);
    this.setState({
      burgerClicked: clicked,
    });
  }

  render() {
    return (
      <>
        <Layout>
          <Burger setBurgerClicked={this.setBurgerClicked} />
          <Navbar burgerClicked={this.state.burgerClicked} />
          <DesktopNavbar />
          <Book />
          <Author />
        </Layout>
      </>
    )
  }
}
