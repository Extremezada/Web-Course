import React from "react";
import "./Nav.css"
import NavItem from "./NavItem";

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar */}
            <NavItem icon="home" text="Início" />
            <NavItem icon="user" text="Usuário" />
        </nav>
    </aside>