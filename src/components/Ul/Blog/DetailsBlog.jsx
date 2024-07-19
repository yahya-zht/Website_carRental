import React from "react";
import blogCar from "../../../assets/data/BlogData";
import { Link, useParams } from "react-router-dom";
import "../../../styles/detailsBlog.css";
import dataCart from "../../../assets/data/Cardata";
function DetailsBlog() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    const { idBlog } = useParams();
    const blog = blogCar.map((blog) => {
        var i = 0;
        const cars = dataCart.map((car) => {
            i += 1;
            if (i < 3) {
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
                                <div className=" info text-center">
                                    <div className="row">
                                        <p className="col mod p-0">
                                            <i class="fa-solid fa-car text-warning me-2"></i>
                                            <br />
                                            {car.model}
                                        </p>
                                        <p className="col auto text-center p-0">
                                            <i class="fa-solid fa-gear text-warning me-2"></i>
                                            {car.automatic}
                                        </p>
                                    </div>

                                    <p className="col kmpl  p-0">
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
        if (idBlog == blog.id) {
            return (
                <div className="row Details-blog">
                    <div className="col-2 border p-1 m-1 col border text-center title-price blog-all">
                        <p className="fw-bolder fs-5 title my-2">The Most Wanted</p>
                        <div>{cars}</div>
                    </div>
                    <div className="col">
                        <div className="title-img_blog d-flex flex-column align-items-center title-price">
                            <p className="title fw-bolder fs-1 d-inline">{blog.title}</p>{" "}
                            <div className="col-5 d-flex align-items-center my-3 w-75">
                                <img src={blog.imgUrl} alt="" className="w-100" />
                            </div>
                        </div>
                        <div>
                            <p className="blog_description " style={{ textAlign: "justify" }}>
                                {blog.description}
                            </p>
                        </div>
                        <div>
                            <hr />
                            <div className="row text-center">
                                <p className="col">
                                    <i class="fa-regular fa-user text-warning me-1 "></i>
                                    {blog.author}
                                </p>
                                <p className="col">
                                    <i class="fa-regular fa-calendar-days text-warning me-1"></i>
                                    {blog.date}
                                </p>
                                <p className="col">
                                    <i class="fa-regular fa-clock text-warning me-1 ms-3"></i>
                                    {blog.time}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 border p-1 m-1 col border text-center title-price blog-all">
                        <p className="fw-bolder fs-5 title my-2 ">The Most Wanted</p>
                        <div>{cars}</div>
                    </div>
                </div>
            );
        }
    });

    return <div className="Blog-item">{blog}</div>;
}

export default DetailsBlog;
