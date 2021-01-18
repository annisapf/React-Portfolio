import React from "react";
import "./style.css";
import Typed from "react-typed";

// npm install --save-dev @iconify/react @iconify-icons/carbon
import { Icon, InlineIcon } from '@iconify/react';
import documentPdf from '@iconify-icons/carbon/document-pdf';


class Container extends React.Component {
    render() {
        return (
            <div id="home" className="intro route bg-image background my-4 py-5">

                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container text-center">
                            <h1 className="intro-title mb-4">Hello, I am Annisa</h1>
                            <p className="intro-subtitle">
                                <span className="text-slider-items"></span>
                                <strong className="text-slider">
                                    <Typed
                                        strings={[
                                            "Web Developer",
                                            "Full-Stack Developer",
                                            "Blogger"
                                        ]}
                                        typeSpeed={80}
                                        backDelay={1100}
                                        backSpeed={30}
                                        loop
                                    />
                                </strong>
                            </p>
                            <p className="pt-3">
                                <div className="share-button d-flex mx-auto d-block">
                                    <span>Hire Me</span>

                                    <a
                                        href="https://cutt.ly/UjezD5f"
                                        target="_blank"
                                        rel="noopener noreferrer">

                                        <Icon icon={documentPdf} color="blue" width="30" height="30" />

                                    </a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;