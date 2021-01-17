import React from "react";


class Contact extends React.Component {

    render() {
        return (



            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div id="contact" className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="title-box-2">
                                            <h5 className="title-left">Drop A Message</h5>
                                        </div>
                                        <div>
                                            <form
                                                action=""
                                                method="POST"
                                                className="contactForm"
                                            >

                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                className="form-control"
                                                                id="name"
                                                                placeholder="Your Name"
                                                                data-rule="minlen:4"
                                                                data-msg="Please enter at least 4 chars"
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Your Email"
                                                                data-rule="email"
                                                                data-msg="Please enter a valid email"
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name="subject"
                                                                id="subject"
                                                                placeholder="Subject"
                                                                data-rule="minlen:4"
                                                                data-msg="Please enter at least 8 chars of subject"
                                                            />
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-group">
                                                            <textarea
                                                                className="form-control"
                                                                name="message"
                                                                rows="5"
                                                                data-rule="required"
                                                                data-msg="Please write something for us"
                                                                placeholder="Message"
                                                            ></textarea>
                                                            <div className="validation"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button
                                                            type="submit"
                                                            className="button button-a button-big button-rouded"
                                                        >
                                                            Send Message
                              </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="title-box-2 pt-4 pt-md-0">
                                            <h5 className="title-left">Let's Talk!</h5>
                                        </div>
                                        <div className="more-info">
                                            <p className="lead">
                                                Whether you are looking
                                                for a web developer, or
                                                just wanna have a chat about tech and startup.
                          <br />
                          Simply fill the from and send me an email.
                        </p>


                                        </div>


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


export default Contact;