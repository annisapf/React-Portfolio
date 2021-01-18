import React from 'react'

import SubHub from '../../images/subhub.png'
import weather from '../../images/weather-dashboard.png'
import scheduler from '../../images/workday-scheduler.png'
import bookclub from '../../images/book-club-store.png'
import wagrup from '../../images/wagrupinfo.png'
import chatterbox from '../../images/chatterbox.png'

// npm install --save-dev @iconify/react @iconify-icons/ion
import { Icon, InlineIcon } from '@iconify/react';
import logoWebComponent from '@iconify-icons/ion/logo-web-component';


class Project extends React.Component {

    render() {
        return (
            <div class="container-fluid">

                <div class="container">


                    <div id="portfolio" class="section extra-margins text-center mt-4 pb-5 pt-1 mb-5">


                        <h2 class="section-heading text-center mb-5 text-uppercase font-weight-bold pt-5 mt-5 wow fadeIn"
                            data-wow-delay="0.2s">My Featured Projects</h2>

                        <p class="text-center w-responsive mx-auto wow fadeIn my-5">I created websites using standard
                        HTML,CSS, Javascript, jQuery, nodejs, express.

                    </p>


                        <div class="row mb-3 wow fadeIn" data-wow-delay="0.4s">


                            <div className="col-lg-4 col-md-12 mb-5">

                                <div className="card card-cascade narrower">


                                    <div className="view view-cascade overlay zoom">

                                        <img src={SubHub} className="card-img-top" alt="SubHub-Food-Finder" />
                                        {/* 
                                <a>

                                    <div className="mask rgba-white-slight"></div>

                                </a> */}

                                    </div>




                                    <div className="card-body card-body-cascade">



                                        <h4 className="card-title">SubHub</h4>


                                        <p className="card-text grey-text">SubHub helps you to find the nearby restaurant
                                        with
                                        various types
                                        of
                                        cuisines within an area from 200M to 10KM</p>


                                        {/* <a href="https://annisapf.github.io/SubHub-Food-Finder/" target="_blank"
                                                className="mx-2" role="button" style="color: #FF7AA2;"><i
                                                    className="fa fa-clone left"></i> Visit
                                        Web</a>
                                            <a href="https://github.com/annisapf/SubHub-Food-Finder" target="_blank"
                                                className="mx-2" role="button" style="color: #FF7AA2;"><i
                                                    className="fab fa-github"></i>View
                                        Code</a> */}
                                        <Icon icon={logoWebComponent} />

                                    </div>


                                </div>


                            </div>

                            <div className="col-lg-4 col-md-6 mb-5">


                                <div className="card card-cascade narrower">


                                    <div className="view view-cascade overlay zoom">

                                        <img src={weather} className="card-img-top" alt="" />

                                        {/* <a>

                                    <div className="mask rgba-white-slight"></div>

                                </a> */}

                                    </div>



                                    <div className="card-body card-body-cascade">



                                        <h4 className="card-title">Weather Dashboard</h4>


                                        <p className="card-text grey-text">Weather Dashboard a simple weather dashboard that
                                        retrieves data
                                        from Open Weather Maps.</p>

                                        {/* <a href="https://annisapf.github.io/Weather-Forecast/" target="_blank" className="mx-2"
                                    role="button" style="color: #FF7AA2;"><i className="fa fa-clone left"></i> Visit
                                        Web</a>
                                <a href="https://github.com/annisapf/Weather-Forecast" target="_blank" className="mx-2"
                                    role="button" style="color: #FF7AA2;"><i className="fab fa-github"></i>View
                                        Code</a> */}

                                    </div>


                                </div>


                            </div>

                            <div className="col-lg-4 col-md-6 mb-5">


                                <div className="card card-cascade narrower">


                                    <div className="view view-cascade overlay zoom">

                                        <img src={scheduler} className="card-img-top" alt="dayplanner" />

                                        {/* <a>

                                    <div className="mask rgba-white-slight"></div>

                                </a> */}

                                    </div>

                                    <div className="card-body card-body-cascade">


                                        <h4 className="card-title">Day Planner</h4>


                                        <p className="card-text grey-text">Day Planner a simple calendar application that
                                        helps
                                        user to save
                                        events for each hour of the day.</p>
                                        {/* 
                                <a href="https://annisapf.github.io/Day-Planner/" target="_blank" className="mx-2"
                                    role="button" style="color: #FF7AA2;"><i className="fa fa-clone left"></i> Visit
                                        Web</a>
                                <a href="https://github.com/annisapf/Day-Planner" target="_blank" className="mx-2"
                                    role="button" style="color: #FF7AA2;"><i className="fab fa-github"></i>View
                                        Code</a> */}

                                    </div>


                                </div>


                            </div>


                        </div>

                        <div className="row mb-3 wow fadeIn" data-wow-delay="0.4s">


                            <div className="col-lg-4 col-md-12 mb-5">


                                <div className="card card-cascade narrower">


                                    <div className="view view-cascade overlay zoom">

                                        <img src={bookclub} className="card-img-top" alt="Book Club Store" />

                                        {/* <a>

                                    <div className="mask rgba-white-slight"></div>

                                </a> */}

                                    </div>


                                    <div className="card-body card-body-cascade">



                                        <h4 className="card-title">Book Club Store</h4>


                                        <p className="card-text grey-text">Book Club Store is a generated-random books web
                                        apps.</p>

                                        {/* 
                                <a href="https://bookclub.store" target="_blank" className="mx-2" role="button"
                                    style="color: #FF7AA2;"><i className="fa fa-clone left"></i> Visit
                                        Web</a> */}


                                    </div>


                                </div>


                            </div>

                            <div className="col-lg-4 col-md-6 mb-5">


                                <div className="card card-cascade narrower">


                                    <div className="view view-cascade overlay zoom">

                                        <img src={wagrup} className="card-img-top" alt="WA Grup Info" />

                                        <a>

                                            <div className="mask rgba-white-slight"></div>

                                        </a>

                                    </div>

                                    <div className="card-body card-body-cascade">


                                        <h4 className="card-title">WA Grup Info</h4>


                                        <p className="card-text grey-text">WA Grup Info is collection of whatsapp group
                                        informations.</p>
                                        {/* 
                                <a href="https://wagrup.info/" target="_blank" className="mx-2" role="button"
                                    style="color: #FF7AA2;"><i className="fa fa-clone left"></i> Visit
                                        Web</a> */}

                                    </div>


                                </div>


                            </div>

                            <div className="col-lg-4 col-md-6 mb-5">


                                <div className="card card-cascade narrower">

                                    <div className="view view-cascade overlay zoom">

                                        <img src={chatterbox} className="card-img-top" alt="Enmployer Generator" />

                                        {/* <a>

                                    <div className="mask rgba-white-slight"></div>

                                </a>  */}

                                    </div>

                                    <div className="card-body card-body-cascade">


                                        <h4 className="card-title">Chatterbox Chat Apps</h4>

                                        <p className="card-text grey-text">ChatterBox is a chat apps implementing socket io
                                    </p>

                                        {/* // <a href="https://github.com/annisapf/chatterbox" target="_blank" className="mx-2"
                                    role="button" style="color: #FF7AA2;"><i className="fab fa-github"></i>View
                                        Code</a>

                                <a href="http://chatterbox.cloud:3600" target="_blank" className="mx-2" role="button"
                                    style="color: #FF7AA2;"><i className="fa fa-clone left"></i> Visit
                                        Web</a> */}

                                    </div>


                                </div>


                            </div>


                        </div>


                    </div>

                </div>


            </div>


        )
    }
}

export default Project;