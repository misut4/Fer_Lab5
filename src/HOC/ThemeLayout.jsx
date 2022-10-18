import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import "./ThemeLayout.scss";
export default function ThemeLayout({ Component }) {
    return (
        <div className="themelayout">
            <Sidebar></Sidebar>
            <div className="main">
                <Component></Component>
            </div>
        </div>
    );
}
