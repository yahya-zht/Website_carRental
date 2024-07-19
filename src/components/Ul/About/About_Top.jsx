import React from "react";
import "../../../styles/about.css";
import AboutSection from "../AboutSection";
const About_Top = () => {
    return (
        <div>
            <div className="about-per d-flex align-items-center mb-5">
                <div className="about-item">
                    <p className="fs-1 text-center fw-bold text-light ">About us</p>
                </div>
            </div>
            <AboutSection />
            <hr className="hr" />
        </div>
    );
};

export default About_Top;
