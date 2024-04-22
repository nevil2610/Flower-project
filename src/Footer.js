import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="inner-footer">
                        <div className="footer-colums-outer">
                            <div className="footer-colum">
                                <div className="footer-title">
                                    <span>Contact Us</span>
                                </div>
                                <ul className="footer-links">
                                    <li>
                                        <span>ADDRESS :</span><br/>
                                            Extrend Flowers <br/>130 Street, Arizona <br/>
                                                85002 <br/>United Sates
                                                </li>
                                                <li>
                                                    <span>EMAIL :</span> <br/>
                                                        info@domain.com
                                                </li>
                                                <li>
                                                    <span>PHONE :</span> <br/>
                                                        (123)456 7890
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="footer-colum">
                                                <div className="footer-title">
                                                    <span>My Account</span>
                                                </div>
                                                <ul className="footer-links">
                                                    <li><a href="#">Prices Drop</a></li>
                                                    <li><a href="#">New Products</a></li>
                                                    <li><a href="#">Best Sales</a></li>
                                                    <li><a href="#">Sitemap</a></li>
                                                    <li><a href="#">Stores</a></li>
                                                </ul>
                                            </div>
                                            <div className="footer-colum">
                                                <div className="footer-title">
                                                    <span>Support</span>
                                                </div>
                                                <ul className="footer-links">
                                                    <li><a href="#">Delivery</a></li>
                                                    <li><a href="#">Legal Notice</a></li>
                                                    <li><a href="#">Terms and Conditions of use</a></li>
                                                    <li><a href="#">About Us</a></li>
                                                    <li><a href="#">Secure Payments</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                            <div className="footer-colum">
                                                <div className="footer-title">
                                                    <span>Newsletters</span>
                                                </div>
                                                <div className="bottom-newsletter">
                                                    <p>Enter your email address for our mailing list to keep yourself updated.</p>
                                                    <form>
                                                        <div className="input-wrapper">
                                                            <input type="text" name="email" placeholder="Enter your email...."/>
                                                        </div>
                                                        <input type="submit" name="submitnewsletter" value="SUBSCRIBE"/>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="footer-bottom">
                                            <div className="copyright"><a href="#">© 2023 - Ecommerce software by PrestaShop™</a></div>
                                            <div className="social-btn"></div>
                                            <div className="payment-icons">
                                                <ul className="payment-options">
                                                    <li><a href="#"><i className="fa-brands fa-cc-visa"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-cc-paypal"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-cc-discover"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-cc-amex"></i></a></li>
                                                    <li><a href="#"><i className="fa-brands fa-cc-mastercard"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </footer>
                    </>
                    );
}
                    export default Footer;