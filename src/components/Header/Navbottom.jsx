import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "./Offcanvas";

function Navbottom() {
    window.onscroll = () => {
        scrollFunction();
    };
    function scrollFunction() {
        var scrollToTopBtn = document.getElementById("Nav_Header");
        if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
            scrollToTopBtn.style.position = "fixed";
            scrollToTopBtn.style.top = 0;
            scrollToTopBtn.style.zIndex = 1;
        } else {
            scrollToTopBtn.style.position = "relative";
        }
    }
    return (
        <>
            <div className="w-100" id="header">
                <div className="menu w-100">
                    <Offcanvas />
                </div>
                <div className="nav_bottom" id="Nav_Header">
                    <div className="nav_item_bottom">
                        <div className="items_bottom">
                            <ul class="items_liste">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Home">
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/About">
                                        About
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Cars">
                                        Cars
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Blog">
                                        Blog
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/Contact">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-form">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2 nav_search" type="search" placeholder="Search" />
                                <button class="btn " type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbottom;
