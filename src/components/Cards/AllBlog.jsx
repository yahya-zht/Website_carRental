import React from "react";
import dataBlog from "../../assets/data/BlogData";
import { Link } from "react-router-dom";

const AllBlog = () => {
    const allBlog = dataBlog.map((blog) => {
        return (
            <div>
                <div className="m-2 p-2 border row">
                    <div className="col">
                        <img src={blog.imgUrl} className="w-100" alt="" />
                    </div>
                    <div className="col-8">
                        <div>
                            <p>
                                <Link
                                    className="blog_title fw-bolder fs-4 d-inline link-underline link-underline-opacity-0"
                                    to={`/Blog/${blog.id}`}
                                >
                                    {blog.title}
                                </Link>
                            </p>
                        </div>
                        <div>
                            <p className="blog_description">
                                {blog.description.slice(0, 190)}... <br />
                                <span>
                                    <Link
                                        className="blog_read text-warning fw-bolder d-inline link-underline link-underline-opacity-0"
                                        to={`/Blog/${blog.id}`}
                                    >
                                        Read More
                                    </Link>
                                </span>
                            </p>
                        </div>
                        <hr />
                        <div className="row">
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
            </div>
        );
    });
    return <div>{allBlog}</div>;
};

export default AllBlog;
