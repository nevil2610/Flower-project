import React from "react";

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header-inner">
                        <div className="header-left">
                            <div className="inner-left">
                                <a href="#"><img src="./assets/images/etrend-flower-logo.jpg" alt=""/></a>
                            </div>
                        </div>
                        {/* <!-- .......hedaer left ended...... --> */}

                        {/* <!-- .......header center started..... --> */}

                        <div className="header-center">
                            <div className="inner-center">
                                <ul>
                                    <li className="menu-option">
                                        <a href="#">HOME</a>
                                    </li>
                                    <li className="menu-option">
                                        <a href="#">SHOP</a>
                                        <ul className="sub-menu">
                                            <li><a href="#">Fashion</a></li>
                                            <li><a href="#">Jwellery</a></li>
                                            <li><a href="#">Furniture</a></li>
                                            <li><a href="#">Autoparts</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-option">
                                        <a href="#">FURNITURE</a>
                                        <ul className="sub-menu">
                                            <li><a href="#">Living Room</a></li>
                                            <li><a href="#">Kitchen</a></li>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Home Decor</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-option">
                                        <a href="#">ELECTRONIC</a>
                                        <ul className="sub-menu">
                                            <li><a href="#">Mobiles</a></li>
                                            <li><a href="#">Camera</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-option">
                                        <a href="#">SALE</a>
                                    </li>
                                    <li className="menu-option">
                                        <a href="#">CONTACT US</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- ......header center ended...... --> */}

                        {/* <!-- .......header right strated......... --> */}

                        <div className="header-right">
                            <div className="inner-right">
                                <div className="profile">
                                    <a href="#"><i className="fa-solid fa-user" style={{color:'#cf0383'}}></i></a><br/>
                                        <a href="#"><span>ACCOUNT</span></a>
                                </div>
                                <div className="search">
                                    <a href="#"><i className="fa-solid fa-magnifying-glass" style={{color:'#cf0383'}}></i></a><br/>
                                        <a href="#"><span>SEARCH</span></a>
                                </div>
                                <div className="cart">
                                    <a href="#"><i className="fa-solid fa-bag-shopping" style={{color:'#cf0383'}}></i></a><br/>
                                        <a href="#"><span>CART</span></a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ...header right ended...... --> */}
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;