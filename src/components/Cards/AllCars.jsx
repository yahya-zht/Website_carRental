import React, { useEffect } from "react";
import datacars from "../../assets/data/CarData.json";
import datacar from "../../assets/data/Cardata";
import { Link } from "react-router-dom";
import "../../styles/offerscar.css";

const html = document.documentElement;
html.scrollLeft = 0;
html.scrollTop = 0;

const AllCars = () => {
    // useEffect(() => {
    // fetch("http://localhost:3000/assets/data/CarData.json")
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
    // console.log(datacars);
    // }, []);
    const data = datacar.map((car) => {
        return (
            <div className="col">
                <div className="my-2">
                    <div class="card w-100">
                        <img src={car.ImageCar} class="card-img-top" style={{ height: "18rem" }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{car.CarName}</h5>
                            <p class="card-text">{car.description}</p>
                            <a href="#" class="btn btn-primary">
                                Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    const cardt = datacar.map((car) => {
        return (
            <div className="col car-item">
                <div className="my-2 border p-1 car">
                    <div>
                        <img src={car.ImageCar} alt="" className="w-100" style={{ height: "18rem" }} />
                    </div>
                    <div className="text-center title-price">
                        <p className="fw-bolder fs-3 title m-0 fw-bolder">{car.CarName}</p>
                        <p className="fs-5 price fw-bolder">{car.price}.00 $ / Day</p>
                    </div>
                    <div className="row info text-center">
                        <p className="col mod pe-0">
                            <i class="fa-solid fa-car text-warning me-2"></i>
                            <br />
                            {car.model}
                        </p>
                        <p className="col auto text-center p-0">
                            <i class="fa-solid fa-gear text-warning me-2"></i>
                            {car.automatic}
                        </p>
                        <p className="col kmpl text-end ps-0">
                            <i class="fa-solid fa-gauge-simple-high text-warning me-2"></i>
                            {car.speed}
                        </p>
                    </div>
                    <div className=" btn-offers">
                        <button className="btn_all btn-details w-100">
                            <Link to={`/Cars/${car.id}`} className="d-block">
                                Details
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <>
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 cars-tm">{cardt}</div>
        </>
    );
};

export default AllCars;
