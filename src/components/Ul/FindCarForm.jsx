import React from "react";
import "../../styles/findcarform.css";
export const FindCarForm = () => {
    return (
        <>
            <div className="find-car-container " id="fcc">
                <div className="position-form row px-2 bg-white">
                    <div className="find-car_left col d-flex align-items-center">
                        <p className="fs-1 fw-bolder text-center ">Find your best car here</p>
                    </div>
                    <div className="p-3 col-8 d-flex align-items-center justify-content-center form-col">
                        <form action="">
                            <div className="row">
                                <div className="col ">
                                    <input
                                        type="text"
                                        className="form-control my-2 input-form"
                                        name=""
                                        id=""
                                        placeholder="From address"
                                        required
                                    />
                                    <input
                                        type="time"
                                        className="form-control my-2 input-form"
                                        name=""
                                        id=""
                                        placeholder="Journey time"
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control my-2 input-form"
                                        name=""
                                        id=""
                                        placeholder="To address"
                                    />
                                    <select className="form-select my-2 input-form" name="" id="">
                                        <option value="">A</option>
                                        <option value="">B</option>
                                        <option value="">C</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <input
                                        type="date"
                                        className="form-control my-2 input-form"
                                        name=""
                                        id=""
                                        placeholder="Journey date"
                                    />
                                    <button className="btn btn-warning btn-find-car ">Find Car </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
