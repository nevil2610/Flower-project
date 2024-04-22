import React from "react";

const FeatureItem = () => {
    return(
        <>
            <div className="featured-item-block">
                <div className="container">
                    <div className="inner-featured">
                        <div className="heading">
                            <span>Feautured Items</span>
                        </div>
                        <div className="featured-items">
                            <div className="featured-img">
                                <a href="#"><img src="./assets/images/euis-1.jpg" alt=""/></a>
                                <span className="sub-head">NEW</span>
                                <div className="feuatured-description">
                                    <a href="#"><span>Eius Tempora</span></a>
                                    <p className="price">$379.00</p>
                                    <a href="#" className="action-primary">ADD TO CART</a>
                                </div>
                            </div>
                            <div className="featured-img">
                                <a href="#"><img src="./assets/images/eius-2.jpg" alt=""/></a>
                                <span className="sub-head">NEW</span>
                                <div className="feuatured-description">
                                    <a href="#">Modi Tempora</a>
                                    <p className="price">$349.00</p>
                                    <a href="#" className="action-primary">ADD TO CART</a>
                                </div>
                            </div>
                            <div className="featured-img">
                                <a href="#"><img src="./assets/images/eius-3.jpg" alt=""/></a>
                                <span className="sub-head">NEW</span>
                                <div className="feuatured-description">
                                    <a href="#">Aperiam Dolore</a>
                                    <p className="price">$389.00</p>
                                    <a href="#" className="action-primary">ADD TO CART</a>
                                </div>
                            </div>
                            <div className="featured-img">
                                <a href="#"><img src="./assets/images/euis-4.jpg" alt=""/></a>
                                <span className="sub-head">NEW</span>
                                <span className="sub-head2">ON SALE</span>
                                <div className="feuatured-description">
                                    <a href="#">Reprehenderit Beatae</a>
                                    <p className="price">$349.00</p>
                                    <a href="#" className="action-primary">ADD TO CART</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeatureItem;