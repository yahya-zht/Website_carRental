import React from "react";
import img_pay from "../../assets/image/payment-methods.png";

const Rent = () => {
    
    return (
        <div>
            <div className="m-5 title-price">
                <p className="fw-bolder fs-2 title my-3 text-center">Booking information</p>
                <p className="fw-bolder fs-4 title my-3 text-start">Booking information</p>
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
            ;
        </div>
    );
};

export default Rent;
