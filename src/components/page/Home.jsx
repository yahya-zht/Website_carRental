import React from "react";
import HeroSlider from "../Hero/HeroSlider";
import Helmet from "../Helmet/Helmet";
import { FindCarForm } from "../Ul/FindCarForm";
import "../../styles/home.css";
import AboutSection from "../Ul/AboutSection";
import ServicesList from "../Ul/ServicesList";
import OffersCar from "../Ul/OffersCar";
import BecomeDriver from "../Ul/BecomeDriver";
import Testimonial from "../Ul/Testimonial";
import BlogList from "../Ul/BlogList";
import Btn from "../Cards/Btn";

const Home = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    return (
        <Helmet title="Home">
            <section className="p-0 hero_slider-section ">
                <Btn />
                <HeroSlider />
                <FindCarForm />
            </section>
            <AboutSection />
            <section>
                <ServicesList />
            </section>
            <section>
                <OffersCar />
            </section>
            <BecomeDriver />
            <Testimonial />
            <BlogList />
        </Helmet>
    );
};

export default Home;
