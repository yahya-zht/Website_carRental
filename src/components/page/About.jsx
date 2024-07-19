import React from "react";
import Helmet from "../Helmet/Helmet";
import About_Top from "../Ul/About/About_Top";
import About_center from "../Ul/About/About_center";
const About = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <Helmet title="About"></Helmet>
            <About_Top />
            <About_center />
        </>
    );
};

export default About;
