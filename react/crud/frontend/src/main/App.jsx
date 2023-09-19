import React from "react";
import "./App.css"

import Main from "../components/templates/Main"
import Footer from "../components/templates/Footer"
import Logo from "../components/templates/Logo"
import Nav from "../components/templates/Nav"

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />
    </div>