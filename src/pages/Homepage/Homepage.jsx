import React from "react";
import "./Homepage.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from "../../assets/logo.jpeg";
import { TypeAnimation } from "react-type-animation";

export default function Homepage() {
    return (
        <>
            <Helmet>
                <title>Duy Vo Portfolio</title>
            </Helmet>
            <div className="homepage section-box">
                <div className="homepage__container">
                    <div className="homepage__content">
                        <h1 className="homepage__heading">
                            Hello, my name is
                            <span className="homepage__name"> Duy Vo</span>
                        </h1>
                        <h2 className="homepage__job">
                            I'm a{" "}
                            <TypeAnimation
                                sequence={[
                                    "Front-end Web Developer", // Types 'One'
                                    1000, // Waits 1s
                                    ,
                                    "",
                                ]}
                                wrapper="span"
                                speed={20}
                                cursor={true}
                                repeat={Infinity}
                                className="homepage__job-title"
                            />
                            {/* <span className="homepage__job-title">
                                Front-end Web Developer
                            </span> */}
                        </h2>
                        <p>
                            I'm a Frontend Web Developer with 6+ month
                            experience. I'm in the way to be a professional web
                            developer.
                        </p>
                        <div>
                            <Link to="/about" className="btn btn-primary">
                                More about me
                            </Link>
                        </div>
                    </div>
                    <div className="homepage__image">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
