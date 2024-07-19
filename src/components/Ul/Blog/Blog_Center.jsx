import React from "react";
import AllBlog from "../../Cards/AllBlog";
import dataCart from "../../../assets/data/Cardata";
import { Link } from "react-router-dom";
const Blog_Center = () => {
    var i = 0;
    const cars = dataCart.map((car) => {
        i += 1;
        if (i < 5) {
            return (
                <div className="col">
                    <div>
                        <div className="my-2 border p-1">
                            <div>
                                <img src={car.ImageCar} alt="" className="w-100" />
                            </div>
                            <div className="text-center title-price">
                                <p className="fw-bolder fs-4 title m-0">{car.CarName}</p>
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
                </div>
            );
        }
    });
    return (
        <div className="Blog-center mb-4">
            <div className="row gx-4 Blog-ALL">
                <div className="col-9 AllBlog">
                    <AllBlog />
                </div>
                <div className="col border text-center title-price blog-all">
                    <p className="fw-bolder fs-3 title m-0 ">The Most Wanted</p>
                    <div>{cars}</div>
                </div>
            </div>
        </div>
    );
};

export default Blog_Center;
