import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
    const date = new Date();
    const dateYear = date.getFullYear();
    return (
        <>
            <footer className="">
                <div className="row footer_item ">
                    <div className="col item_1">
                        <div className="item_pra">
                            <p>
                                <i class="fa-solid fa-car"></i>
                                <span>
                                    Rent Car <br /> Service
                                </span>
                            </p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore corporis porro ipsum vero, veniam
                            veritatis. Aliquam repellat libero beatae, totam laudantium praesentium, consectetur non tempore quasi
                            accusamus repellendus impedit cupiditate.
                        </p>
                    </div>
                    <div className="col item_2">
                        <p>Quick Links</p>
                        <ul>
                            <li>
                                <Link to="/Home">Home</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>

                            <li>
                                <Link to="/Cars">Car</Link>
                            </li>
                            <li>
                                <Link to="/Blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/Policy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col item_3">
                        <p>Quick Links</p>
                        <ul>
                            <li>333 Rabat, Maroc</li>
                            <li>Phone : +212612345678</li>
                            <li>Email : car_Rnt@gmail.com </li>
                            <li>Office Time 8 AM - 6 PM</li>
                        </ul>
                    </div>
                    <div className="col item_4">
                        <p>
                            Newsletter <br /> <span>Subscribe our newsletter</span>
                        </p>
                        <form action="">
                            <input type="search" name="" id="" placeholder="Email" />
                            <i class="fa-solid fa-paper-plane"></i>
                        </form>
                    </div>
                    <hr />
                </div>
                <div className="footer_bottom">
                    <p>
                        <i class="fa-regular fa-copyright"></i> Copyright {dateYear} Developed by Yahya ZHT. All rights reserved
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
