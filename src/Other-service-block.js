import React from "react";

const OtherService = () => {
    return (
        <>
            <div className="other-services-block">
                <div className="container">
                    <div className="inner-services">
                        <div className="main-services">
                            <div className="service-icon">
                                <img src="./assets/images/24-7 Online Support.png" alt=""/>
                            </div>
                            <div className="services-content">
                                <strong>24/7 Online Support</strong>
                                <p>Trained staffs are ready to online support 24 hours a day</p>
                            </div>
                        </div>
                        <div className="main-services">
                            <div className="service-icon">
                                <img src="./assets/images/Secure Payments.png" alt=""/>
                            </div>
                            <div className="services-content">
                                <strong>Secure Payments</strong>
                                <p>We ensure secure payment with PEV</p>
                            </div>
                        </div>
                        <div className="main-services">
                            <div className="service-icon">
                                <img src="./assets/images/Refund Policy.png" alt=""/>
                            </div>
                            <div className="services-content">
                                <strong>Refund Policy</strong>
                                <p>Simply return within 30 days for an exchange</p>
                            </div>
                        </div>
                        <div className="main-services">
                            <div className="service-icon">
                                <img src="./assets/images/Free Shipping.png" alt=""/>
                            </div>
                            <div className="services-content">
                                <strong>Free Shipping</strong>
                                <p>Free shipping on all us order above $200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OtherService;