import React from "react";
import Helmet from "../Helmet/Helmet";
import Contact_Top from "../Ul/Contact/Contact_Top";
import Contact_center from "../Ul/Contact/Contact_center";
import "../../styles/contact.css";
const Contact = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <>
            <Helmet title="Contact"></Helmet>
            <Contact_Top />
            <Contact_center />
        </>
    );
};

export default Contact;
