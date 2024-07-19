import React from "react";
import img1 from "../../assets/image/person/person_01.jpg";
import img2 from "../../assets/image/person/person_02.jpg";
import img3 from "../../assets/image/person/person_03.jpg";
import img4 from "../../assets/image/person/person_04.jpg";
const member = (
    <div class="card ">
        <img src={img1} class="card-img-top" alt="..." />
        <div class="card-body">
            <div className="members-icons">
                <i class="fa-brands fa-facebook-f mx-2 "></i>
                <i class="fa-brands fa-x-twitter mx-2"></i>
                <i class="fa-brands fa-linkedin mx-2"></i>
                <i class="fa-brands fa-instagram mx-2"></i>
            </div>
            <p class="card-text mt-3 fw-bolder members-name ">
                Amine
                <br />
                <span className="fw-medium text-black">5 years of experience</span>
            </p>
        </div>
    </div>
);
const Members = () => {
    return (
        <div className="members mb-5">
            <div className="members-item_1">
                <p className="text-warning fs-3 fw-bolder text-center mb-0">Experts</p>
                <p className="text-welcome fs-1 fw-bolder text-center mb-3">Our Members</p>
            </div>
            <div className="row text-center members-item_2">
                <div className="col-3 item-member">{member}</div>
                <div className="col-3 item-member">{member}</div>
                <div className="col-3 item-member">{member}</div>
                <div className="col-3 item-member">{member}</div>
            </div>
        </div>
    );
};

export default Members;
