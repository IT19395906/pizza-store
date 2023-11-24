import React from "react";
import Pizza from "../assets/Pizza.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Pizza} alt="" />
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Home</Link>
                <Link to="/about">Home</Link>
                <Link to="/contact">Home</Link>
            </div>
        </div>
    );
};
export default Navbar;