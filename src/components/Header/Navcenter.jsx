import React from "react";

function Navcenter() {
    return (
        <>
            <div className="nav_container_center">
                <div className="nav_center">
                    <div className="nav_item_center">
                        <i class="fa-solid fa-car"></i>
                        <p>
                            Rent Car <br /> Service
                        </p>
                    </div>
                    <div className="nav_item_center">
                        <i class="fa-solid fa-earth-americas"></i>
                        <p>
                            Maroc <br />
                            <span>Rabat City</span>
                        </p>
                    </div>
                    <div className="nav_item_center">
                        <i class="fa-regular fa-clock"></i>
                        <p>
                            Monday to Sunday <br />
                            <span>8AM - 6PM</span>
                        </p>
                    </div>
                    <div className="nav_item_center">
                        <button>
                            <i class="fa-solid fa-phone"></i>
                            Request a call
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navcenter;
