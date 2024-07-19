import React from "react";
import Helmet from "../Helmet/Helmet";
import Bolg_Top from "../Ul/Blog/Blog_Top";
import Blog_Center from "../Ul/Blog/Blog_Center";
import "../../styles/allBlog.css";

const Blog = () => {
   window.scrollTo({
       top: 0,
       behavior: "smooth",
   });
    return (
        <>
            <Helmet title="Blog"></Helmet>
            <Bolg_Top />
            <Blog_Center />
        </>
    );
};

export default Blog;
