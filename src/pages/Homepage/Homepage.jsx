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
                <title>misut4 Portfolio</title>
            </Helmet>
            <div className="homepage section-box">
                <div className="homepage__container">
                    <div className="homepage__content">
                        <h1 className="homepage__heading">
                            Konichixinchao, I'm 
                            <span className="homepage__name"> Nguyen Si Hoang / misut4</span>
                        </h1>
                        <h2 className="homepage__job">
                            I'm a Back-end/mobile Developer
                                
                            
                            {/* <span className="homepage__job-title">
                                Front-end Web Developer
                            </span> */}
                        </h2>
                        <p>
                            I am a back-end/mobile flutter developer by day and the Dark Knight by night.
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
