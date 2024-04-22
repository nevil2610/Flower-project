import React from "react";
import Bannner from "./Banner";
import Shopflower from "./Shop-flower";
import Discount from "./Discount";
import FeatureItem from "./Feature-item";
import SurpriceBanner from "./Surprice-block";
import BestFlower from "./Best-flower-block";
import Testimonial from "./Testimonial-block";
import Brand from "./Brand-block";
import OtherService from "./Other-service-block";

const Body = () => {
    return (
        <>
            <section>
                <div className="inner-section">
                    <Bannner/>
                    <Shopflower/>
                    <Discount/>
                    <FeatureItem/>
                    <SurpriceBanner/>
                    <BestFlower/>
                    <Testimonial/>
                    <Brand/>
                    <OtherService/>
                </div>
            </section>
        </>
    );
}
export default Body;