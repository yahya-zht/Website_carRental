import React from "react";
import data from "../../assets/data/BlogData";
import "../../styles/blogitems.css";
import { Link } from "react-router-dom";
function BlogItems() {
    var i = 0;
    const blog = data.map((bl) => {
        i += 1;
        if (i < 4) {
            return (
                <div className="col blog-item-m" key={bl.id}>
                    <div className="">
                        <img src={bl.imgUrl} alt="img" style={{ width: "100%" }} />
                    </div>
                    <div className="px-4  pt-3 border border-top-0">
                        <p className="blog_title fw-bolder fs-4 d-inline">{bl.title}</p>
                        <p className="blog_description">{bl.description.slice(0, 200)}...</p>
                        <p className="blog_read text-warning fw-bolder d-inline">
                            <Link
                                className="blog_read text-warning fw-bolder d-inline link-underline link-underline-opacity-0"
                                to={`/Blog/${bl.id}`}
                            >
                                Read More
                            </Link>
                        </p>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <p className=" blog_author fw-bolder">
                                <i class="fa-regular fa-user text-warning me-1 "></i>
                                {bl.author}
                            </p>
                            <p className="blog_time">
                                <i class="fa-regular fa-calendar-days text-warning me-1"></i>
                                {bl.date} <i class="fa-regular fa-clock text-warning me-1 ms-3"></i>
                                {bl.time}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
    });
    return (
        <>
            <div className="blog_items">
                <p className="text-warning fs-4 fw-bolder text-center m-0">Explore our blogs</p>
                <p className="text-welcome fs-1 fw-bolder text-center mb-3">Latest Blogs</p>
                <div className="row my-3 item-blog">{blog}</div>
            </div>
        </>
    );
}

export default BlogItems;
