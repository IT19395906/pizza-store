import React, { useState } from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import Pizza from "../assets/Pizza.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState();
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Pizza} alt="" />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
};
export default Navbar;