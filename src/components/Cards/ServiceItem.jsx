import React from "react";

const ServiceItem = (props) => {
    return (
        <div className="service-item col text-center">
            <p>
                <i className={props.icone}></i>
                <br />
                <span className="fs-3 text-title fw-semibold">{props.title}</span>
                <br />
                <span className="service-para text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam corporis velit dolor mollitia,
                </span>
            </p>
        </div>
    );
};

export default ServiceItem;
