import React from "react";
import { Link } from "react-router-dom";
import Rent from "../page/Rent";
const CarItem = (props) => {
    return (
        <div className={props.class}>
            <div>
                {console.log()}
                <img src={props.img} alt="" className="w-100" />
            </div>
            <div className="text-center title-price">
                <p className="fw-bolder fs-3 title m-0 fw-bolder">{props.title}</p>
                <p className="fs-5 price fw-bolder">{props.price}.00 $ / Day</p>
            </div>
            <div className="row info">
                <p className="col mod pe-0">
                    <i class="fa-solid fa-car text-warning me-2"></i>
                    {props.model}
                </p>
                <p className="col auto text-center p-0">
                    <i class="fa-solid fa-gear text-warning me-2"></i>
                    {props.auto}
                </p>
                <p className="col kmpl text-end ps-0">
                    <i class="fa-solid fa-gauge-simple-high text-warning me-2"></i>
                    {props.kmpl}
                </p>
            </div>
            <div className="row btn-offers">
                <button className="col btn_all btn-rent">
                    <Link to={`/Rent`} className="w-100 d-inline">
                        Rent
                    </Link>
                </button>
                <button className="col btn_all btn-details">
                    <Link to={`/Cars/${props.details}`} className="w-100 d-inline">
                        Details
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default CarItem;
