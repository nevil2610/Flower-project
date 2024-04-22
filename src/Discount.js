import React from "react";

const Discount = () => {
    return(
        <>
            <div className="discount-block">
                <div className="container">
                    <div className="inner-discount">
                        <div className="discount-img">
                            <a href="#"><img src="./assets/images/ad-block-1.jpg" alt=""/></a>
                            <div className="discount-text">
                                <strong className="text-d1">30% OFF</strong>
                                <p className="text-d2">Better Flowers.Lower Price.</p>
                            </div>
                        </div>
                        <div className="discount-img">
                            <a href="#"><img src="./assets/images/ad-block-2.jpg" alt=""/></a>
                                <div className="discount-text">
                                    <strong className="text-d1">FLAT 25% OFF</strong>
                                    <p className="text-d2">Buds Grow As Your Love Grows.</p>
                                </div>
                        </div>
                        <div className="discount-img">
                            <a href="#"><img src="./assets/images/ad-block-1.jpg" alt=""/></a>
                            <div className="discount-text">
                                <strong className="text-d1">UP TO 40% OFF</strong>
                                <p className="text-d2">Feel The Power Of The Flowers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Discount;