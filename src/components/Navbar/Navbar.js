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
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                        >
                            Portfolio
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={
                                window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
