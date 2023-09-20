import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import "font-awesome/css/font-awesome.min.css"

import { BrowserRouter, Routes } from "react-router-dom";

import Footer from "../components/templates/Footer"
import Logo from "../components/templates/Logo"
import Nav from "../components/templates/Nav"

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>