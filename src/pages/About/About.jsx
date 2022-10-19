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
                        <h1 className="about__name">Vo Van Bao Duy</h1>
                        <p>Thu Duc City, Ho Chi Minh City, Vietnam</p>
                        <p className="about__links">
                            <a href="tel:0326836870">
                                <FaPhoneAlt></FaPhoneAlt>
                                <span>+84 326 836 870</span>
                            </a>{" "}
                            <span className="divider">| </span>
                            <a href="mailto:vobaoduydev@gmail.com">
                                <FaRegEnvelope></FaRegEnvelope>
                                <span>vobaoduydev@gmail.com</span>
                            </a>
                            <span className="divider">| </span>
                            <a href="github.com/duyvox-dev">
                                <FaGithubAlt></FaGithubAlt>
                                <span>duyvox-dev</span>
                            </a>
                        </p>
                    </div>

                    <div className="about__section">
                        <h2 className="about__section-title">
                            Carerer objective
                        </h2>
                        <div className="about__section-content">
                            <p>
                                Looking forward to working as a fresher{" "}
                                <b>React front-end developer</b> in a major firm
                                to exhibit my skills in programming and provide
                                high-end solutions for general software issues
                                while also drawing improved customer experience.
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
                                            <b> 20% </b>
                                            <span> Schoolarship </span>
                                        </span>
                                        -
                                        <span>
                                            <b> GPA: </b>
                                            <span> 3.26/4.0 </span>
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
                                    Professional Front-End Developer Trainning
                                    Program at Cybersoft Academy
                                </p>
                                <i>Jan 2022 - Jul 2022</i>
                            </div>
                            <div className="flex space-between">
                                <p>
                                    Archived Most Promising Group at FPT
                                    Hackathon 2022
                                </p>
                                <i>Oct - 2022</i>
                            </div>
                        </div>
                    </div>
                    <div className="about__section">
                        <h2 className="about__section-title">Projects</h2>
                        <div className="about__section-content">
                            <div className="project__list">
                                <div className="project__item">
                                    <div className="project__heading">
                                        <h4 className="project__name">
                                            MovieTime
                                        </h4>
                                        <i>Jun 2022 - Jul 2022</i>
                                    </div>
                                    <div className="project__info">
                                        <ul className="project__info-list">
                                            <li className="">
                                                <b>About: </b>
                                                <span>
                                                    A project that help user to
                                                    book movie ticket easily
                                                    from multiple theaters. The
                                                    front-end consumes data from
                                                    the backend via REST API.
                                                </span>
                                            </li>

                                            <li>
                                                <span>
                                                    <b>Team:</b> 2 members
                                                </span>
                                                <ul>
                                                    <li>1 front-end</li>
                                                    <li>1 back-end</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <b>Role: </b>
                                                <span>
                                                    Work as a front-end
                                                    developer, design UI UX,
                                                    implement entire front-end
                                                    side.
                                                </span>
                                            </li>
                                            <li>
                                                <b>Tech Stacks: </b>
                                                <span>
                                                    ReactJs, TailwindCss,
                                                    ReduxToolkit, Axios.
                                                </span>
                                            </li>
                                            <li>
                                                <b>Github: </b>
                                                <a
                                                    target="_blank"
                                                    className="project__link"
                                                    href="https://github.com/duyvox-dev/MovieBooking_ReactJS.git"
                                                >
                                                    github.com/duyvox-dev/MovieBooking_ReactJS.git
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="project__item">
                                    <div className="project__heading">
                                        <h4 className="project__name">
                                            Airbnb
                                        </h4>
                                        <i>Jul 2022 - Aug 2022</i>
                                    </div>
                                    <div className="project__info">
                                        <ul className="project__info-list">
                                            <li className="">
                                                <b>About: </b>
                                                <span>
                                                    This is my capstone project
                                                    at Cybersft Academy, the
                                                    project implement some part
                                                    of orignal Airbnb.com which
                                                    is one of the most common
                                                    online marketplaces that
                                                    connects people who want to
                                                    rent their homes with those
                                                    who are looking for
                                                    accommodations in specific
                                                    locations.
                                                </span>
                                            </li>

                                            <li>
                                                <span>
                                                    <b>Team:</b> 5 members
                                                </span>
                                                <ul>
                                                    <li>3 front-end</li>
                                                    <li>2 back-end</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <b>Role: </b>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            {" "}
                                                            Works as a{" "}
                                                            <b>
                                                                front-end team
                                                                leader:
                                                            </b>{" "}
                                                            devied tasks for
                                                            team members, review
                                                            pull request, merge
                                                            code and resolve
                                                            confilicts.
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            {" "}
                                                            Works as a{" "}
                                                            <b>
                                                                front-end
                                                                developer:
                                                            </b>{" "}
                                                            design UI UX,
                                                            implement front-end
                                                            of Room Detail Page
                                                            of User role and
                                                            Room Management Page
                                                            of Admin role.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <b>Tech Stacks: </b>
                                                <span>
                                                    ReactJs, TailwindCss, Ant
                                                    Design, Sass, ReduxToolkit,
                                                    Axios.
                                                </span>
                                            </li>
                                            <li>
                                                <b>Github: </b>
                                                <a
                                                    target="_blank"
                                                    className="project__link"
                                                    href="https://github.com/duyvox-dev/MovieBooking_ReactJS.git"
                                                >
                                                    github.com/duyvox-dev/MovieBooking_ReactJS.git
                                                </a>
                                            </li>
                                            <li>
                                                <b>Live demo: </b>
                                                <ul>
                                                    <li>
                                                        <b>User role: </b>
                                                        <a
                                                            target="_blank"
                                                            className="project__link"
                                                            href="https://airbnb-bc21.netlify.app/"
                                                        >
                                                            https://airbnb-bc21.netlify.app/
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <b>Admin role: </b>
                                                        <a
                                                            target="_blank"
                                                            className="project__link"
                                                            href="https://admin-airbnb-bc21.netlify.app"
                                                        >
                                                            https://admin-airbnb-bc21.netlify.app
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="project__item">
                                    <div className="project__heading">
                                        <h4 className="project__name">
                                            F-Food
                                        </h4>
                                        <i>Sep 2022 - Oct 2022</i>
                                    </div>
                                    <div className="project__info">
                                        <ul className="project__info-list">
                                            <li className="">
                                                <b>About: </b>
                                                <span>
                                                    A project was borned to
                                                    solve the Food demand in FPT
                                                    University. F-Food connects
                                                    campus's store with students
                                                    and lecturers. F-Food allows
                                                    user to pre-order at a
                                                    specified time and location
                                                    that they want to receive
                                                    (at a room or location
                                                    inside the university).
                                                    Eventually, the system can
                                                    help stores raise sales
                                                    during off-peak hours,
                                                    reduce the pressure during
                                                    rush hours, and the most
                                                    important result is that
                                                    customers no longer have to
                                                    wait.
                                                </span>
                                            </li>

                                            <li>
                                                <span>
                                                    <b>Team:</b> 4 members
                                                </span>
                                                <ul>
                                                    <li>3 front-end</li>
                                                    <li>1 back-end</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <b>Role: </b>
                                                <span>
                                                    Work as a front-end
                                                    developer, design UI UX,
                                                    implement front-end of Order
                                                    page, Order history page,
                                                    Order detail page, Profile
                                                    page, Login page.
                                                </span>
                                            </li>
                                            <li>
                                                <b>Tech Stacks: </b>
                                                <span>
                                                    ReactJs, Sass, MUI,
                                                    ReduxToolkit, Axios.
                                                </span>
                                            </li>
                                            <li>
                                                <b>Github: </b>
                                                <a
                                                    target="_blank"
                                                    className="project__link"
                                                    href="https://github.com/duyvox-dev/MovieBooking_ReactJS.git"
                                                >
                                                    github.com/duyvox-dev/MovieBooking_ReactJS.git
                                                </a>
                                            </li>
                                            <li>
                                                <b>Live demo: </b>
                                                <a
                                                    target="_blank"
                                                    className="project__link"
                                                    href="https://f-food-hackathon2022.netlify.app/"
                                                >
                                                    https://f-food-hackathon2022.netlify.app/
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
                                <span>Javascript, HTML, CSS</span>
                            </p>
                            <p>
                                <b>Technologies </b>
                                <span>Git, REST API, Agile/Scrum</span>
                            </p>
                            <p>
                                <b>Frameworks: </b>
                                <span>
                                    ReactJS, SASS, TailwindCss, Material UI, Ant
                                    Design, Redux, ReduxToolkit
                                </span>
                            </p>
                            <p>
                                <b>Operating Systems: </b>
                                <span>MacOS, Windows</span>
                            </p>
                            <p>
                                <b>Developer Tools: </b>
                                <span>VsCode, Jira, Postman</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
