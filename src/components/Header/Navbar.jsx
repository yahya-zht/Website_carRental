import React from "react";
import NavTop from "./NavTop";

import "../../styles/navbar.css";
import Navcenter from "./Navcenter";
import Navbottom from "./Navbottom";

function Navbar() {
    return (
        <>
            <div className="Header">
                <NavTop />
                <Navcenter />
                <Navbottom />
            </div>
        </>
    );
}

export default Navbar;
