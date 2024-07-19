import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import Blog from "../page/Blog";
import Cars from "../page/Cars";
import Contact from "../page/Contact";
import NotFound from "../page/NotFound";
import DetailsCar from "../Ul/Cars/DetailsCar";
import DetailsBlog from "../Ul/Blog/DetailsBlog";
import Rent from "../page/Rent";
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Rent" element={<Outlet />}>
                <Route path="" element={<Rent />} />
            </Route>
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Outlet />}>
                <Route path="" element={<Blog />} />
                <Route path=":idBlog" element={<DetailsBlog />} />
            </Route>
            <Route path="/Cars" element={<Outlet />}>
                <Route path="" element={<Cars />} />
                <Route path=":idCar" element={<DetailsCar />} />
            </Route>
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default Routers;
