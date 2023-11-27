import React from "react";
import { Link } from "react-router-dom";
import Cover from "../assets/cover.jpg";
import "../styles/home.css";

export default function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${Cover})`}}>
            <div className="headerContainer">
                <h1>Aish Pizza</h1>
                <p>All pizzas at one place</p>
                <Link to="/menu">
                    <button>Order Now</button>
                </Link>
            </div>
        </div>
    );
}