import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-b navbar-trans navbar-dark navbar-expand-md fixed-top">
            <Link className="navbar-brand" to="/">
                Annisa
      </Link>

            <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <a className="nav-link text-info" href="/">About</a>
                <a className="nav-link text-info" href="/portfolio">Portfolio</a>
                <a className="nav-link text-info" href="/contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;
