import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "font-awesome/css/font-awesome.min.css"

import { BrowserRouter } from "react-router-dom";

import Footer from "../components/templates/Footer"
import Logo from "../components/templates/Logo"
import Nav from "../components/templates/Nav"
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>