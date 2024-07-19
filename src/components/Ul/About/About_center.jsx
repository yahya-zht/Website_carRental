import React from "react";
import img from "../../../assets/image/blog/img_01.jpg";
import "../../../styles/about.css";
import BecomeDriver from "../BecomeDriver";
import Members from "../../Cards/Members";

const About_center = () => {
    return (
        <>
            <div className="about-center_container w-100 my-5">
                <div className="about-center row">
                    <div className="about-center-item_1 col p-0">
                        <img src={img} alt="" className="w-100" />
                    </div>
                    <div className="about-center-item_2 col-7">
                        <p className="h1 fw-bolder mb-3 text-blue">We Are Cpmmitted To Provide Safe Ride Solutions</p>
                        <p className="lh-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex velit quisquam, nihil modi eveniet
                            consequuntur sed tempore. Vitae, repellendus, quasi dolorum iure porro itaque sequi assumenda dolore
                            asperiores eum unde!
                        </p>
                        <div className="d-flex align-items-center">
                            <div className="">
                                <i class="fa-solid fa-phone fs-4 me-4 text-blue"></i>
                            </div>
                            <div>
                                <p className="m-0  fw-bolder fs-4 text-warning ">
                                    Need Any Help?
                                    <br />
                                    <span className="fs-4 fw-bolder text-blue"> +212 6123-12349</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BecomeDriver />
            <Members />
        </>
    );
};

export default About_center;
