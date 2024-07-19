import React from "react";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";

const Offcanvas = () => {
    return (
        <nav class="navbar fixed-top px-2 w-100">
            <div class="container-fluid" id="header-nav">
                <a class="navbar-brand fw-bold text-warning" href="#">
                    Rent Car Service
                </a>
                <button
                    class="navbar-toggler btn-nav"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                >
                    <i class="fa-solid fa-bars p-2"></i>
                    {/* <span class="navbar-toggler-icon btn_togg"></span> */}
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title fw-bold text-warning" id="offcanvasNavbarLabel">
                            Rent Car Service
                        </h5>
                        <button type="button" class="text-warning" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 pt-3">
                            <li class="nav-item">
                                <Link className="nav-link" to="/Home" aria-current="page">
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
                            <li>
                                <form class="d-flex mt-3 ms-3" role="search">
                                    <input
                                        class="form-control me-2 fw-bolder"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <button class="btn search-btn" type="submit">
                                        Search
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Offcanvas;
