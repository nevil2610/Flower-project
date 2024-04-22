import React from "react";

const Brand = () => {
    return (
        <>
            <div className="brand-block">
                <div className="container">
                    <div className="inner-brand">
                        <div className="heading">
                            <span>Shop By Brands</span>
                        </div>
                        <div className="brand-items">
                            <div className="brand-name"><i>
                                <img src="./assets/images/brand-1.png" alt=""/>
                            </i></div>
                            <div className="brand-name">
                                <img src="./assets/images/brand-2.png" alt=""/>
                            </div>
                            <div className="brand-name">
                                <img src="./assets/images/brand-3.png" alt=""/>
                            </div>
                            <div className="brand-name">
                                <img src="./assets/images/brand-4.png" alt=""/>
                            </div>
                            <div className="brand-name">
                                <img src="./assets/images/brand-5.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Brand;