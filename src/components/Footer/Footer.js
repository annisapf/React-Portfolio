import React from "react";


import { Icon, InlineIcon } from '@iconify/react';
import linkedinOutline from '@iconify-icons/teenyicons/linkedin-outline';
import githubIcon from '@iconify-icons/brandico/github';


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

                                    <Icon icon={githubIcon} width="30" height="30" color="white" />

                                </a>
                            </li>

                            <li>
                                <a
                                    href="http://linkedin.com/in/annisapurbandari/"
                                    target="_blank"
                                    rel="noopener noreferrer">

                                    <Icon icon={linkedinOutline} width="30" height="30" color="white" />

                                </a>

                            </li>

                        </ul>

                    </div>

                </div>



                <a
                    href="http://annisa.world"
                    target="_blank"
                    rel="noopener noreferrer">

                    <p className="text-light"><strong>annisa.world</strong></p>

                </a>

            </div>


        </footer>
    );
}

export default Footer;
