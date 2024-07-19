import React from "react";
import Helmet from "../Helmet/Helmet";
import Cars_Top from "../Ul/Cars/Cars_Top";
import OffersCar from "../Ul/OffersCar";
import AllCars from "../Cards/AllCars";
import Cars_Center from "../Ul/Cars/Cars_Center";
import "../../styles/cars.css";

const Cars = () => {
   window.scrollTo({
       top: 0,
       behavior: "smooth",
   });
    return (
        <>
            <Helmet title="Cars"></Helmet>
            <Cars_Top />
            {/* <OffersCar /> */}
            <Cars_Center />
        </>
    );
};

export default Cars;
