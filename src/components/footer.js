import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkdeInIcon from "@material-ui/icons/LinkedIn";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <LinkdeInIcon />
            </div>
            <p> &copy; 2023 aishpizza.com All rights reserved</p>
        </div>
    );
}
export default Footer;