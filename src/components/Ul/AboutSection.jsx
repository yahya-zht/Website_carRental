import React from "react";
import "../../styles/aboutsection.css";
import img from "../../assets/image/img-about-01.png";

const AboutSection = () => {
    return (
        <>
            <div className="about_items" id="about_items">
                <div className="about-item-01">
                    <p className="text-warning fs-3 fw-bolder text-center mb-0">About Us</p>
                    <p className="text-welcome fs-1 fw-bolder text-center mb-3">Welcome to car rent service</p>
                </div>
                <div className="row">
                    <div className="col-6 about-item-01 d-flex flex-column justify-content-center">
                        <p className="fs-6 text-secondary-emphasis lh-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <br /> Eveniet est nemo itaque tempore, vel voluptas sequi, dolorum distinctio incidunt libero eius
                            esse. <br /> Voluptate blanditiis quam, tenetur minus delectus iste itaque!
                        </p>
                        <p className="fs-6 text-secondary-emphasis text-check lh-lg">
                            <i class="fa-regular fa-circle-check text-warning"> </i> Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit.
                            <br /> <i class="fa-regular fa-circle-check text-warning"></i> Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit.
                            <br /> <i class="fa-regular fa-circle-check text-warning"></i> Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit.
                            <br /> <i class="fa-regular fa-circle-check text-warning"></i> Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit.
                        </p>
                    </div>
                    <div className="col about_item-02 d-flex align-items-center">
                        <img src={img} alt="car About" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;
