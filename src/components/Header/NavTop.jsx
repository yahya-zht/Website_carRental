import React from "react";
import "../../fontawesome/css/all.css";

function NavTop() {
    return (
        <>
            <div className="nav_container_top">
                <div className="nav_top">
                    <div className="nav_left">
                        <p>Need Help?</p>
                        <p className="nav_item">
                            <i class="fa-solid fa-square-phone"></i>
                            <span>Call : +212612345678</span>
                        </p>
                    </div>
                    <div className="nav_rigth">
                        <div className="nav_context">
                            <i class="fa-solid fa-right-to-bracket"></i>
                            <span>Login</span>
                        </div>
                        <div className="nav_context">
                            <i class="fa-regular fa-user"></i>
                            <span>Register</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavTop;
