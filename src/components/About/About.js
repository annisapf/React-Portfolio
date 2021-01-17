import React from "react";

import photobw from "../../images/annisapurbandari-bw.png";
import girlsintech from "../../images/girlsintech.png"
import hacktoberfest from "../../images/hacktoberfest2020.png"

import seo from "../../images/seo.png"
import html5 from "../../images/html5.png"
import css from "../../images/css.png"
import javascript from "../../images/javascript.png"
import jquery from "../../images/jquery.png"
import bootstrap from "../../images/bootstrap.png"
import python from "../../images/python.png"
import nodejs from "../../images/nodejs.png"
import mysql from "../../images/mysql.png"
import react from "../../images/react.png"


class About extends React.Component {

    render() {
        return (
            <section id="about" className="about-mf sect-pt4 route">

                <h2 class="section-heading text-center mb-5 text-uppercase font-weight-bold pt-5 wow fadeIn"
                    data-wow-delay="0.2s">About me</h2>

                <div class="row align-items-center m-5">


                    <img src={photobw} alt="annisa-purbandari" className="" width="300" height="300" />




                    <div class="col-lg-7 ml-2 mb-5">

                        <h5 class="font-weight-bold mb-4">Hi, I'm Annisa.</h5>

                        <p>I am a web developer with high
                        passion in coding,
                        design and layout
                        of a website. I have experiences in digital marketing, research and building a
                        startup.
                        I speak English, French and Bahasa Indonesia. I approach all tasks with enthusiasm
                        and
                        confidence.</p>

                        <p>I am INTJ (Introverted Intuitive Thinking Judging) with endless capacity for
                        improving
                        upon
                        anything that takes my interest. I have unusual independence of mind. I possess the
                        unusual
                        trait combination of imagination and knowledge. I enjoy developing unique solutions to
                        complex problems. I love to code and to cook. I usually spend my time reading, diving,
                        watching copious amounts of movies, and eating all sorts of good food. I share social
                        and
                        environmental values.</p>

                        <p>My unique experience with many disciplines, my genuine love of technology, my
                        ability to
                        clearly and precisely communicate to clients, vendors and stake holders combined with my
                        experience within multiple roles has enabled me to pave a strong foundation in facing
                        new challenges and new technologies.</p>

                    </div>

                </div>

                <div id="skills" className="section feature-box text-center mt-5 mb-5">


                    <h2 className="section-heading text-center mb-5 text-uppercase font-weight-bold wow fadeIn"
                        data-wow-delay="0.2s">
                        My Skills</h2>

                    <p className="text-center w-responsive mx-auto wow fadeIn" data-wow-delay="0.2s">Technical skills and
programming languages that I am familiar with</p>

                    <div className="row mb-3">
                        <div className="col">

                            <img src={seo} width="100" alt="SEO" />
                            <img src={html5} width="100" alt="HTML5" />
                            <img src={css} width="100" alt="CSS" />
                            <img src={javascript} width="100" alt="JavaScript" />
                            <img src={bootstrap} width="100" alt="Bootstrap" />

                            <img src={jquery} width="80" alt="jquery" />
                            <img src={python} width="60" alt="Python" />
                            <img src={nodejs} width="100" alt="nodejs" />
                            <img src={mysql} width="100" alt="mysql" />
                            <img src={react} width="100" alt="react" />


                        </div>

                    </div>
                </div>

                <div id="community" class="section feature-box text-center mt-5 mb-5">


                    <h2 class="section-heading text-center mb-5 text-uppercase font-weight-bold wow fadeIn"
                        data-wow-delay="0.2s">
                        Community</h2>

                    <p class="text-center w-responsive mx-auto my-5 wow fadeIn" data-wow-delay="0.2s">Community and Open
Source I am a part of</p>


                    <img src={girlsintech} width="120" alt="girlsintech" />
                    <img src={hacktoberfest} width="200" alt="hacktoberfest2020" />


                </div>

            </section>


        );
    }
}

export default About;