import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAppStore } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__cont-box">
                <div className="footer__container">
                        <div className="logo"></div>
                        <p>
                            Setanta Sports delivers exclusive live events of the most
                            popular sports tournaments you will not see anywhere else.
                        </p>
                </div>
                <div className="footer__container">
                    <h2>Browse</h2>
                    <div className="footer__container-textWrap">
                        <p>FOOTBALL</p>
                        <p>MMA</p>
                        <p>BASKETBALL</p>
                        <p>RACING</p>
                        <p>TENNIS</p>
                    </div>
                </div>
                <div className="footer__container">
                    <h2>Help</h2>
                    <div className="footer__container-textWrap">
                        <p>Help</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
                <div className="footer__container">
                    <h2>Watch us on Mobile</h2>
                    <div className="footer__container-logoBox">
                        <div className="appstore-logo"></div>
                        <div className="playstore-logo"></div>
                    </div>
                </div>
            </div>
            <div className="footer__termsBox">
                <h2>© Eurasian Broadcasting Enterprise Limited 2023 All rights reserved</h2>
                <div className="footer__iconBox">
                    <FontAwesomeIcon icon={faFacebookF} className="icon"/>
                    <FontAwesomeIcon icon={faInstagram} className="icon"/>
                    <FontAwesomeIcon icon={faYoutube} className="icon"/>
                    <FontAwesomeIcon icon={faAppStore} className="icon"/>
                    <FontAwesomeIcon icon={faGooglePlay} className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;