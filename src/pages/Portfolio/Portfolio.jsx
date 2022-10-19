import React from "react";
import "./Portfolio.scss";
import Airbnb from "../../assets/portfolio/airbnb.png";
import FFood from "../../assets/portfolio/f-food.png";
export default function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__heading">My projects</h2>
            <div className="portfolio__list">
                <div className="portfolio__item">
                    <div className="portfolio__image">
                        <img src={Airbnb} alt="" />
                    </div>
                    <div className="portfolio__content">
                        <h3 className="portfolio__name">Airbnb</h3>
                        <p className="portfolio__info">
                            <b>Date: </b> Jun 2022 - Jul 2022
                        </p>
                        <p className="portfolio__about">
                            <b>About : </b>This is my capstone project at
                            Cybersft Academy, the project implement some part of
                            orignal Airbnb.com which is one of the most common
                            online marketplaces that connects people who want to
                            rent their homes with those who are looking for
                            accommodations in specific locations.
                        </p>
                        <p></p>
                        <p>
                            <b>Github: </b>
                            <a
                                target="_blank"
                                className="project__link"
                                href="https://github.com/duyvox-dev/MovieBooking_ReactJS.git"
                            >
                                github.com/duyvox-dev/MovieBooking_ReactJS.git
                            </a>
                        </p>
                    </div>
                </div>
                <div className="portfolio__item">
                    <div className="portfolio__image">
                        <img src={FFood} alt="" />
                    </div>
                    <div className="portfolio__content">
                        <h3 className="portfolio__name">F-Food</h3>
                        <p className="portfolio__info">
                            <b>Date: </b> Sep 2022 - Oct 2022
                        </p>
                        <p className="portfolio__about">
                            <b>About : </b>A project was borned to solve the
                            Food demand in FPT University. F-Food connects
                            campus's store with students and lecturers. F-Food
                            allows user to pre-order at a specified time and
                            location that they want to receive (at a room or
                            location inside the university). Eventually, the
                            system can help stores raise sales during off-peak
                            hours, reduce the pressure during rush hours, and
                            the most important result is that customers no
                            longer have to wait.
                        </p>
                        <p></p>
                        <p>
                            <b>Github: </b>
                            <a
                                target="_blank"
                                className="project__link"
                                href="https://github.com/duyvox-dev/MovieBooking_ReactJS.git"
                            >
                                github.com/duyvox-dev/MovieBooking_ReactJS.git
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
