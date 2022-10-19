import React from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUser,
    faBagShopping,
    faAddressBook,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={Logo} alt="" />
            </div>
            <div className="sidebar__links">
                <NavLink to="/" className="sidebar__links-item">
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/about" className="sidebar__links-item">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <span>About</span>
                </NavLink>
                <NavLink to="/portfolio" className="sidebar__links-item">
                    <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                    <span>Portfolio</span>
                </NavLink>
            </div>
        </div>
    );
}
