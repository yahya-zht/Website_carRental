import React from "react";

const Contact_center = () => {
    return (
        <div className="">
            <div className="contact mb-4">
                <div className="row contact-inp">
                    <div className="col-9 contant_cont-1">
                        <form action="" method="post">
                            <input type="text" name="name" id="" className="form-control" placeholder="Your Name" />
                            <br />
                            <input type="email" name="email" id="" className="form-control" placeholder="Email" />
                            <br />
                            <textarea
                                name="mess"
                                id=""
                                cols="30"
                                rows="10"
                                className="form-control"
                                placeholder="Message"
                            ></textarea>
                            <br />
                            <div className="text-end">
                                <input type="submit" value="Send Message" className="fw-bolder bg-send" />
                            </div>
                        </form>
                    </div>
                    <div className="col contant_cont-2">
                        <div>
                            <p className="blog_title-para fw-bolder fs-4">contact Information</p>
                            <p className="text-secondary fs-6 fw-bolder">123 Agdal, Rabat</p>
                            <p className="blog_title-para fw-bolder fs-6">
                                Phone : <span className="text-secondary">+212 612345678</span>
                            </p>
                            <p className="blog_title-para fw-bolder fs-6 ">
                                Email : <span className="text-secondary">Location@gmail.com</span>
                            </p>
                        </div>
                        <div>
                            <p className="blog_title-para fw-bolder fs-4">Follow Us</p>
                            <p className="">
                                <i class="fa-brands fa-facebook-f mx-3 blog_title"></i>
                                <i class="fa-brands fa-instagram mx-3 blog_title"></i>
                                <i class="fa-brands fa-x-twitter mx-3 blog_title"></i>
                                <i class="fa-brands fa-linkedin-in mx-3 blog_title"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact_center;
