import React from "react";
import "../../styles/becomedriver.css";
import img from "../../assets/image/car_15.png";
const BecomeDriver = () => {
    return (
        <div className="become-driver ">
            <div className="become_driver-item row h-100">
                <div className="driver_item-2 col d-flex align-items-start justify-content-center flex-column ">
                    <h2 className="text-light fw-bolder">Do You Want to Earn With Us? So Don't Be Late</h2>
                    <button className="btn btn_driver fw-bolder">Become a Driver</button>
                </div>
                <div className="driver_item-1 col-6 align-self-center">
                    <img src={img} alt="driver image" style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    );
};

export default BecomeDriver;
