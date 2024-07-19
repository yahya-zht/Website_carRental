import React from "react";
import { useParams } from "react-router-dom";
import datacar from "../../../assets/data/Cardata";
import img_pay from "../../../assets/image/payment-methods.png";
import "../../../styles/detailsCar.css";

const DetailsCar = () => {
    const { idCar } = useParams();
    const car = datacar.map((res) => {
        {
            res.id === undefined && <h1>Loading...</h1>;
        }
        if (res.id == idCar) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            return (
                <div className="row details-mob">
                    <div className="col-5 d-flex align-items-center">
                        <img src={res.ImageCar} alt="" className="w-100" />
                    </div>
                    <div className="col-7">
                        <div className="m-lg-4 text-center title-price">
                            <h1 className="fw-bolder fs-3 title m-0">{res.CarName}</h1>
                            <div>
                                <p className="fs-5 price fw-bolder my-3">{res.price}.00 $ / Day</p>
                                <p>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-solid fa-star text-warning"></i>
                                    <i class="fa-regular fa-star text-warning"></i>(45 retings)
                                </p>
                            </div>
                            <p className="my-4">{res.description}</p>
                        </div>
                        <div>
                            <div className="row info text-center">
                                <p className="col mod pe-0">
                                    <i class="fa-solid fa-car text-warning me-2"></i>
                                    {res.model}
                                </p>
                                <p className="col auto text-center p-0">
                                    <i class="fa-solid fa-gear text-warning me-2"></i>
                                    {res.automatic}
                                </p>
                                <p className="col kmpl text-end ps-0">
                                    <i class="fa-solid fa-gauge-simple-high text-warning me-2"></i>
                                    {res.speed}
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="row info text-center">
                                <p className="col mod pe-0">
                                    <i class="fa-solid fa-location-arrow text-warning me-2"></i>
                                    {res.gps}
                                </p>
                                <p className="col auto text-center p-0">
                                    <i class="fa-solid fa-gear text-warning me-2"></i>
                                    {res.seatType}
                                </p>
                                <p className="col kmpl text-end ps-0">
                                    <i class="fa-solid fa-users text-warning me-2"></i>
                                    {res.number_of_passengers}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });

    return (
        <div className="members">
            <div className="car-item">{car}</div>
            <div className="m-5 title-price">
                <p className="fw-bolder fs-2 title my-3 text-center">Booking information</p>
                <form action="" method="post">
                    <div className="row detailsForm">
                        <div className="col-6">
                            <input type="text" name="" id="" className="form-control" placeholder="Name" />
                            <br />
                            <input type="number" name="" id="" className="form-control" placeholder="Telephone" />
                            <br />
                            <input type="text" name="" id="" className="form-control" placeholder="City" />
                            <br />
                            <input type="date" name="" id="" className="form-control" />
                        </div>
                        <div className="col-3 ">
                            <p className="fw-bolder fs-5 title my-3">Payment Information</p>
                            <div className="form-check">
                                <input type="radio" name="pay" id="Direct" className="form-check-input" />
                                <label htmlFor="Direct" className="form-check-label">
                                    Direct Bank Transfer
                                </label>
                                <br />
                                <input type="radio" name="pay" id="Cheque" className="form-check-input" />
                                <label htmlFor="Cheque" className="form-check-label">
                                    Cheque Paymnt
                                </label>
                                <br />
                                <input type="radio" name="pay" id="Master" className="form-check-input" />
                                <label htmlFor="Master" className="form-check-label">
                                    Master Card
                                </label>
                                <br />
                                <input type="radio" name="pay" id="Paypal" className="form-check-input" />
                                <label htmlFor="Paypal" className="form-check-label">
                                    Paypal
                                </label>
                                <br />
                            </div>
                        </div>
                        <div className="col-3 d-flex align-items-end">
                            <div>
                                <img src={img_pay} className="w-100" alt="" />
                                <input type="submit" value="Reserve Now" className="btn btn-success w-100" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DetailsCar;
