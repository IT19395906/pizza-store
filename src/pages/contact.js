import React from "react";
import ContactImg from "../assets/contact.jpg";
import "../styles/contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage: `url(${ContactImg})` }}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <label>
                        Title:
                        <select>
                            <option value="1">Mr.</option>
                            <option value="2">Mrs.</option>
                        </select>
                    </label>
                    <label htmlFor="name">First Name</label>
                    <input name="name" placeholder="Enter your first name" type="text" />
                    <label htmlFor="lastname">Last Name</label>
                    <input name="lastname" placeholder="Enter your last name" type="text" />
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter your email" type="email" />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="6" placeholder="Enter message" required></textarea>
                    <button type="submit">
                        Send </button></form>
            </div>
        </div>
    );
}
export default Contact;
