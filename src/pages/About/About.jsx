import React from "react";
import "./About.scss";
import { Helmet } from "react-helmet";
import { FaPhoneAlt, FaRegEnvelope, FaGithubAlt } from "react-icons/fa";
export default function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="about section-box">
                <div className="about__container">
                    <div className="about__heading">
                        <h1 className="about__name">Nguyen Si Hoang</h1>
                        <p>Ho Chi Minh City, Vietnam</p>
                        <p className="about__links">
                            <a href="tel:0326836870">
                                <FaPhoneAlt></FaPhoneAlt>
                                <span>+84 352588420 </span>
                            </a>{" "}
                            <span className="divider">| </span>
                            <a href="mailto:sihoang36@gmail.com">
                                <FaRegEnvelope></FaRegEnvelope>
                                <span>sihoang36@gmail.com</span>
                            </a>
                            <span className="divider">| </span>
                            <a href="github.com/misut4">
                                <FaGithubAlt></FaGithubAlt>
                                <span>misut4</span>
                            </a>
                        </p>
                    </div>

                    <div className="about__section">
                        <h2 className="about__section-title">
                            Carerer objective
                        </h2>
                        <div className="about__section-content">
                            <p>
                                Looking forward to working as a full-time{" "}
                                <b>Back-end/mobile developer</b>.
                            </p>
                        </div>
                    </div>
                    <div className="about__section">
                        <h2 className="about__section-title">Education</h2>
                        <div className="about__section-content">
                            <div className="flex space-between">
                                <div>
                                    {" "}
                                    <h3>FPT University</h3>
                                    <p>
                                        <span>
                                            <b>Major: </b>
                                            <span>Software Engineering </span>
                                        </span>
                                        -
                                        <span>
                                            <b> GPA: </b>
                                            <span> 2.87/4.0 </span>
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <i>Sep 2020 - Now</i>
                                    <p>Ho Chi Minh, Vietnam</p>
                                </div>
                            </div>
                            <div className="flex space-between"></div>
                        </div>
                    </div>
                    <div className="about__section">
                        <h2 className="about__section-title">
                            Certificates And Prizes
                        </h2>
                        <div className="about__section-content">
                            <div className="flex space-between">
                                <p>
                                    Honors student in English Language.
                                </p>
                                <i>2018</i>
                            </div>
                            <div className="flex space-between">
                                <p>
                                    Lam minh lam may at FPT
                                    Hackathon 2022
                                </p>
                                <i>Oct - 2022</i>
                            </div>
                        </div>
                    </div>
                    <div className="about__section">
                        <h2 className="about__section-title">
                            Technical Skills
                        </h2>
                        <div className="about__section-content">
                            <p>
                                <b>Languages: </b>
                                <span>Javascript, HTML, CSS, Java, Kotlin</span>
                            </p>
                            <p>
                                <b>Technologies </b>
                                <span>Git, REST API, NodeJS</span>
                            </p>
                            <p>
                                <b>Frameworks: </b>
                                <span>
                                    ReactJS, Material UI, Flutter, Electron
                                </span>
                            </p>
                            <p>
                                <b>Operating Systems: </b>
                                <span>Windows, LinuX</span>
                            </p>
                            <p>
                                <b>Developer Tools: </b>
                                <span>VsCode, Postman, MongoDB, Android Studio, IntelliJ</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
