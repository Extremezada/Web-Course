import React from "react";
import "./Nav.css"
import NavItem from "./NavItem";

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem nav="/" icon="home" text="Início" />
            <NavItem nav="/users" icon="user" text="Usuário" />
        </nav>
    </aside>