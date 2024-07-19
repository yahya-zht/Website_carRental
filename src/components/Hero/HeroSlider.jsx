import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../styles/hero-slider.css";
const HeroSlider = () => {
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };
    return (
        <Slider {...settings} className="hero_slider">
            <div className="slider_item slider_item-01 mt-0">
                <div className="slider-container">
                    <div className="slider_content">
                        <h6 className="text-light mb-3">For Rent $70 Per Day</h6>
                        <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
                        <button className="rounded-3 reserve_btn mt-4 p-2">
                            <Link to="/cars">Reserve Now</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="slider_item slider_item-02 mt-0">
                <div className="slider-container">
                    <div className="slider_content">
                        <h6 className="text-light mb-3">For Rent $70 Per Day</h6>
                        <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
                        <button className="rounded-3 reserve_btn mt-4 p-2">
                            <Link to="/cars">Reserve Now</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="slider_item slider_item-03 mt-0">
                <div className="slider-container">
                    <div className="slider_content">
                        <h6 className="text-light mb-3">For Rent $70 Per Day</h6>
                        <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>
                        <button className=" reserve_btn rounded-3 mt-4 p-2">
                            <Link to="/cars">Reserve Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default HeroSlider;
