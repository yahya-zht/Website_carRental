import React from "react";
import Slider from "react-slick";
import "../../styles/testimonial.css";

import img_01 from "../../assets/image/person/person_01.jpg";
import img_02 from "../../assets/image/person/person_02.jpg";
import img_03 from "../../assets/image/person/person_03.jpg";
import img_04 from "../../assets/image/person/person_04.jpg";
import img_05 from "../../assets/image/person/person_05.jpg";
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="w-100 testimonial_container">
            <div className="testimonial_items mb-4">
                <div className="text-center">
                    <p className="text-warning fs-3 fw-bolder text-center m-0">Our clients</p>
                    <p className="text-welcome fs-1 fw-bolder text-center mb-3">Testimonials</p>
                </div>

                <Slider {...settings}>
                    <div className="testimonial py-4 px-3">
                        <p className="section__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae
                            repudiandae, dolor, sapiente placeat ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
                            voluptate odit?
                        </p>
                        <div className="mt-3 d-flex align-items-center gap-4">
                            <img src={img_01} alt="" className="w-25 h-25 rounded-2" />
                            <div>
                                <p className="mb-0 mt-3 customer_name h6">Amine AMRI</p>
                                <p className="text-secondary">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial py-4 px-3">
                        <p className="section__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae
                            repudiandae, dolor, sapiente placeat ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
                            voluptate odit?
                        </p>

                        <div className="mt-3 d-flex align-items-center gap-4">
                            <img src={img_02} alt="" className="w-25 h-25 rounded-2" />
                            <div>
                                <p className="mb-0 mt-3 customer_name h6">Brahim Hasani</p>
                                <p className="text-secondary">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial py-4 px-3">
                        <p className="section__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae
                            repudiandae, dolor, sapiente placeat ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
                            voluptate odit?
                        </p>
                        <div className="mt-3 d-flex align-items-center gap-4">
                            <img src={img_03} alt="" className="w-25 h-25 rounded-2" />
                            <div>
                                <p className="mb-0 mt-3 customer_name h6">Imad Gadi</p>
                                <p className="text-secondary">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial py-4 px-3">
                        <p className="section__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magni explicabo molestias recusandae
                            repudiandae, dolor, sapiente placeat ab, animi eum minima nulla facere aliquam aut vitae quo pariatur
                            voluptate odit?
                        </p>
                        <div className="mt-3 d-flex align-items-center gap-4">
                            <img src={img_04} alt="" className="w-25 h-25 rounded-2" />
                            <div>
                                <p className="mb-0 mt-3 customer_name h6">Ahmed Madi</p>
                                <p className="text-secondary">Customer</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;
