import React from "react";

const Bannner = () => {
    return (
        <>
            <div className="banner-block">
                <img src="./assets/images/banner.jpg" alt=""/>
                    <div className="banner-text">
                        <div className="container">
                            <div className="banner-text-first">
                                <a href="#">
                                    <p className="text1">FlowerTrend</p>
                                    <p className="text2">Flower With Soul</p>
                                </a>
                                <p className="text3">Up to <span>50%</span> Off</p>
                                <a href="#" className="banner-click">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}
export default Bannner;