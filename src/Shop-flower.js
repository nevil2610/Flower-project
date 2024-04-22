import React from "react";

const Shopflower = () => {
    return(
        <>
            <div className="shop-flower-block">
                <div className="container">
                    <div className="inner-shop">
                        <div className="heading">
                            <span>Shop Flowers</span>
                        </div>
                        <div className="flower-items">
                            <div className="flower-img">
                                <a href="#"><img src="./assets/images/1_thumb.jpg" alt=""/></a>
                                <div className="sub-title"><a href="#">Fashion</a></div>
                            </div>
                            <div className="flower-img">
                                <a href="#"><img src="./assets/images/2_thumb.jpg" alt=""/></a>
                                <div className="sub-title"><a href="#">Yellow</a></div>
                            </div>
                            <div className="flower-img">
                                <a href="#"><img src="./assets/images/3_thumb.jpg" alt=""/></a>
                                <div className="sub-title"><a href="#">Roses</a></div>
                            </div>
                            <div className="flower-img">
                                <a href="#"><img src="./assets/images/4_thumb.jpg" alt=""/></a>
                                <div className="sub-title"><a href="#">Tulips</a></div>
                            </div>
                            <div className="flower-img">
                                <a href="#"><img src="./assets/images/5_thumb.jpg" alt=""/></a>
                                <div className="sub-title"><a href="#">Jasmin</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Shopflower;