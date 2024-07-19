import React, { Fragment } from "react";
import Routers from "../routers/Routers";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Btn from "../Cards/Btn";

const Layout = () => {
    return (
        <Fragment>
            <Btn />
            <div>
                <Navbar />
            </div>
            <div>
                <Routers />
            </div>
            <div>
                <Footer />
            </div>
        </Fragment>
    );
};

export default Layout;
