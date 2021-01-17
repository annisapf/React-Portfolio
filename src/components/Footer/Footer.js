import React from "react";

import "./style.css";

function Footer() {
    return (
        <footer className="page-footer font-small">

            <div className="flex text-center py-3">

                <div className="row">

                    <div className="col-md-12">

                        <ul className="social-network social-circle">

                            <li>
                                <a
                                    href="https://github.com/annisapf"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    <i className="ion-social-github"></i>

                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://linkedin.com/in/annisapurbandari/"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    <i className="ion-social-linkedin"></i>

                                </a>

                            </li>

                        </ul>

                    </div>

                </div>




                <p className="text-light"><strong>annisa.world</strong></p>

            </div>


        </footer>
    );
}

export default Footer;
