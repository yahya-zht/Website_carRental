import React from "react";
import "../../styles/service.css";
import ServiceItem from "../Cards/ServiceItem";

const ServicesList = () => {
    return (
        <div className="services-list my-5">
            <div className="mb-4">
                <p className="fs-3 text-warning fw-bolder text-center mb-0">See our</p>
                <p className="fs-1 text-title fw-bolder text-center mb-3">Popular Services</p>
            </div>
            <div className="services-items row row-cols-3">
                <ServiceItem icone="fa-solid fa-location-dot" title="City Transfer" />
                <ServiceItem icone="fa-solid fa-building" title="Whole City Tour" />
                <ServiceItem icone="fa-solid fa-car-rear" title="Unlimited Miles Car Rental" />
                <ServiceItem icone="fa-solid fa-stopwatch" title="Fast & Easy Booking" />
                <ServiceItem icone="fa-solid fa-map-pin" title="Many Pickup Locations" />
                <ServiceItem icone="fa-solid fa-plane-departure" title="Airport Transfer" />
            </div>
        </div>
    );
};

export default ServicesList;
