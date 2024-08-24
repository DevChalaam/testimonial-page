// Import Module
import React from "react";
import check from "../Image/check.png";
import googleLogo from "../Image/googleLogo.png";
import MetaLogo from "../Image/MetaLogo.png";
import "./testimonial-page.css";

function Testimonial() {
    return(
        <div className="main-container">
            {/* Image Main */}
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-sec8I7MNhILuXGJz3eaqzQrDz3s_M9JlN0oWli6far9J4CzF" alt="big-star" className="image-big-star"></img>

                {/* Reviewers Topic */}
                <div className="topic-container">
                    <p className="txt-reviewer">Reviewers</p>
                </div>

                {/* Reviewers Content */}
                <div className="reviewers-container">
                    <p className="txt-reviewers">Reviewers is where people can access guidelines, <br></br> 
                        checklists, and other tools to assist them in reviewing <br></br>
                        papers or manuscripts. It provides a structured <br></br>
                        approach to ensure that the review process is <br></br>
                        thorough, efficient, and consistent.</p>
                </div>

                {/* Check Container */}
                <div className="checklist-container">
                    <div className="container-image-check">
                        {/* Image Check */}
                        <img src={check} alt="check" className="image-check"></img>
                    </div>

                    <div className="txt-checklist">
                        {/* Content Check */}
                        <p className="txt-checklists">Checklist to Review an Academic Paper</p>
                    </div>
                </div>

                <div className="checklist-container">
                    <div className="container-image-check">
                        <img src={check} alt="check" className="image-check"></img>
                    </div>

                    <div className="txt-checklist">
                        <p className="txt-checklists">Peer Review Checklist</p>
                    </div>
                </div>

                <div className="checklist-container">
                    <div className="container-image-check">
                        <img src={check} alt="check" className="image-check"></img>
                    </div>

                    <div className="txt-checklist">
                        <p className="txt-checklists">Checklist for Editors, Reviewers, and Authors of SPIE Journals</p>
                    </div>
                </div>

                {/* Google Logo Container */}
                <div className="google-container-box">
                    <div className="google-container-image">
                        {/* Image Google Logo */}
                        <img src={googleLogo} alt="Google Logo" className="image-logo-google"></img>
                    </div>

                    {/* Star Google Container */}
                    <div className="start-google-container">
                        <div className="star-google">⭐️⭐️⭐️⭐️</div>
                        <p className="gray-star-google">⭐️</p>
                    </div>

                    <div className="sammanthaLee-container-text">
                        <p className="sammanthaLee-text">Samantha Lee</p>
                    </div>

                    <div className="under-sammantha-container-txt">
                        <p className="txt-sammantha">The checklist ensures that the review process is thorough</p>
                    </div>
                </div>

                {/* Meta Logo Container */}
                <div className="meta-container-box">
                    <div className="meta-container-image">
                        {/* Image Meta Logo */}
                        <img src={MetaLogo} alt="Meta logo" className="image-logo-meta"></img>
                    </div>

                    {/* Star Meta Container */}
                    <div className="star-meta-container">
                        <div className="star-meta">⭐️⭐️⭐️⭐️⭐️</div>
                    </div>

                    <div className="rachelPatel-container-text">
                        <p className="rachelPatel-text">Rachel Patel</p>
                    </div>

                    <div className="under-rachelPatel-container-txt">
                        <p className="txt-rachelPatel">I highly recommend the <br></br> Writecream Business Description</p>
                    </div>
                </div>
        </div>
    )
};

export default Testimonial;