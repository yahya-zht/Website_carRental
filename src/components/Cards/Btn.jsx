import React from "react";
import "../../styles/Btn.css";

const Btn = () => {
    window.onscroll = () => {
        scrollFunction();
    };
    function scrollFunction() {
        var scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
    // Scroll to the top of the document when the button is clicked
    const scrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };
    return (
        <button onClick={scrollToTop} id="scrollToTopBtn" title="Go to top">
            {/* &#8679; Top */}
            <i class="fa-solid fa-up-long"></i>
        </button>
    );
};

export default Btn;
