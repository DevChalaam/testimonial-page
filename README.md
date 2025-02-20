# Testimonial Page

This Project is Portfolio and Experience.

![alt text](image.png)

## Script Coding

Javascript

```js
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
```

CSS Script

```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');

* {
    margin: 0 auto;
    padding: 0 auto;
    box-sizing: border-box;
}

body {
    background-color: #FAFAF9;
    font-family: "Sora", sans-serif;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
}

/* Main Container */
div.main-container {
    display: flexbox;
    flex-direction: column;
    border: #FAFAF9 1px solid;
    margin-top: 162px;
    width: 88%;
    height: 65vh;

    /* Image Main */
    & img.image-big-star {
        width:75px;
        border: none;
        border-radius: 50%;
    }

    /* Reviewers Topic */
    & div.topic-container {
        border: #FAFAF9 1px solid;
        margin-top: 16px;
        width: 11.4%;
        display: block;
        margin-left: 0;

        & p.txt-reviewer {
            color: #18181B;
            font-size: 2.25rem;
            font-weight: 500;
        }
    }

    /* Reviewers Content */
    & div.reviewers-container {
        border: #FAFAF9 1px solid;
        width: 33%;
        display: block;
        margin-top: 12px;
        margin-left: 0;

        & p.txt-reviewers {
            color: #52525A;
            font-size: 1.25rem;
            font-weight: 400;
        }
    }
    /* Check Container */
    & div.checklist-container {
        width: 33%;
        border: #FAFAF9 1px solid;
        margin-top: 32px;
        margin-left: 0;

        & div.container-image-check {
            width: 20px;
            height: 20px;
            border: #FAFAF9 1px solid;
            margin-left: 0;

            /* Image Check */
            & img.image-check {
                width: 19px;
                height: 19px;
                display: block;
                margin-top: -0.5px;
            }
        }

        /* Content Check */
        & div.txt-checklist {
            height: 20px;
            margin-top: -20px;
            border: #FAFAF9 1px solid;
            display: block;
            position: relative;
            margin-left: 28px;

            & p.txt-checklists {
                color: #52525A;
                font-size: 0.875rem;
                font-weight: 200;
            }
        }
    }

    /* Google Logo Container */
    & div.google-container-box {
        display: flex;
        border: #FFFFFF 1px solid;
        border-radius: 15px;
        background-color: #FFFFFF;
        position: relative;
        width: 460px;
        height: 21vh;
        top: -38vh;
        left: 50vh;

        & div.google-container-image {
            display: block;
            border: #FFFFFF 1px solid;
            width: 100px;
            height: 4vh;
            margin-top: 28px;
            margin-left: 40px;

            /* Image Google Logo */
            & img.image-logo-google {
                width: 100px;
                margin-top: 3px;
            }
        }

        /* Star Google Container */
        & div.start-google-container {
            display: block;
            border: #FFFFFF 1px solid;
            width: 120px;
            height: 2vh;
            margin-top: 38px;
            margin-left: 160px;
            position: absolute;

            & div.star-google {
                display: block;
                margin: 0 4px 0 0;
                margin-top: -3px;
            }

            & p.gray-star-google {
                display: block;
                filter: saturate(0);
                position: absolute;
                top: -3px;
                left: 86px;
            }
        }

        & div.sammanthaLee-container-text {
            display: block;
            border: #FFFFFF 1px solid;
            width: 120px;
            height: 2.3vh;
            position: absolute;
            margin-left: 40px;
            margin-top: 86px;

            & p.sammanthaLee-text {
                font-size: 1rem;
                font-weight: 500;
            }
        }

        & div.under-sammantha-container-txt {
            display: block;
            border: #FFFFFF 1px solid;
            width: 260px;
            height: 5vh;
            position: absolute;
            margin-left: 40px;
            margin-top: 123px;
            margin-bottom: 28px;

            & p.txt-sammantha {
                font-size: 1rem;
                font-weight: 400;
                color: #52525A;
            }
        }
    }

    /* Meta Logo Container */
    & div.meta-container-box {
        display: flex;
        border: #FFFFFF 1px solid;
        border-radius: 15px;
        background-color: #FFFFFF;
        position: relative;
        width: 460px;
        height: 21vh;
        top: -32vh;
        left: 20vh;

        & div.meta-container-image {
            display: block;
            width: 100px;
            height: 4vh;
            border: none;
            position: absolute;
            margin-top: 28px;
            margin-left: 40px;

            /* Image Meta Logo */
            & img.image-logo-meta {
                display: block;
                width: 100px;
                margin-top: -11px;
                margin-left: -1.5px;
            }
        }

        /* Star Meta Container */
        & div.star-meta-container {
            display: block;
            width: 120px;
            height: 2vh;
            border: none;
            position: absolute;
            margin-top: 38px;
            margin-left: 160px;

            & div.star-meta {
                display: block;
                margin: 0 4px 0 0;
                margin-top: -3.5px;
            }
        }

        & div.rachelPatel-container-text {
            display: block;
            width: 120px;
            height: 2.3vh;
            border: none;
            position: absolute;
            margin-top: 86px;
            margin-left: 40px;

            & p.rachelPatel-text {
                font-size: 1rem;
                font-weight: 500;
            }
        }

        & div.under-rachelPatel-container-txt {
            display: block;
            width: 280px;
            height: 5vh;
            border: none;
            position: absolute;
            margin-left: 40px;
            margin-top: 123px;
            margin-bottom: 28px;

            & p.txt-rachelPatel {
                font-size: 1rem;
                font-weight: 400;
                color: #52525A;
            }
        }
    }
}

/* Responsive */
@media screen and (max-width: 640px){
    div.main-container {
        height: 102vh;
        margin-top: 90px;

        & div.topic-container {
            width: 195px;
        }

        & div.reviewers-container {
            width: 555px;
        }

        & div.txt-checklist {
            width: 272px;
        }

        & div.txt-checklist {
            width: 430px;
        }

        & div.google-container-box {
            top: 30px;
            left: 60px;
        }

        & div.meta-container-box {
            left: -60px;
            top: 70px;
        }
    }
}
```

Run Project on Terminal

`npm start`

#### Result

![alt text](image-4.png)

![alt text](image-3.png)