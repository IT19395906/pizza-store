import React from "react";
import "../styles/about.css";
import Top from "../assets/top.jpg";
import Aboutimg from "../assets/about.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${Top})` }}></div>
            <div className="aboutBottom" style={{ backgroundImage: `url(${Aboutimg})` }}>
                <h1>About Us</h1>
                <p>
                    Lorem Ipsum is simply dummy text
                    of the printing and typesetting
                    industry. Lorem Ipsum has been
                    the industry's standard dummy text
                    ever since the 1500s, when an unknown p
                    rinter took a galley of type and scram
                    bled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text
                    of the printing and typesetting
                    industry. Lorem Ipsum has been
                    the industry's standard dummy text
                    ever since the 1500s, when an unknown p
                    rinter took a galley of type and scram
                    bled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text
                    of the printing and typesetting
                    industry. Lorem Ipsum has been
                    the industry's standard dummy text
                    ever since the 1500s, when an unknown p
                    rinter took a galley of type and scram
                    bled it to make a type specimen book.
                    It has survived not only five centuries,
                    but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised
                    in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    );
}
export default About;