import React from "react";

const Testimonial = () => {
    return (
        <>
            <div className="testimonial-block">
                <div className="container">
                    <div className="inner-testimonial">
                        <div className="heading">
                            <span>Testimonials</span>
                        </div>
                        <div className="testimonial-owl-outer">
                            <div className="testimonial-owl-inner">
                                <div className="testimonial-img">
                                    <img src="./assets/images/testimonial-img.png" alt=""/>
                                </div>
                                <div className="testimonial-desc">
                                    <p className="testimonial-text">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                                <div className="testimonial-detail">
                                    <strong>John Doe</strong>
                                    <span>Customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Testimonial;