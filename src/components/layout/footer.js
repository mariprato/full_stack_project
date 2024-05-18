import React from "react";
import { Footer } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SubscriptionForm from "./SubscriptionForm";

import "./footer.css";

function FooterCom () {
    return (
        <Footer container className="footer-container">
            <div className="footer-content">
                <div className="section-one">
                    <Footer.Brand
                        href="/"
                        src="/image/Footer.png"
                        alt="Fur-Ever Logo"
                        className="footer-brand"
                    />
                    <p className="footer-name">Fur-Ever Found</p>
                    <div className="social-icons">
                        <FontAwesomeIcon className="contact-icons" icon={faInstagram} />
                        <FontAwesomeIcon className="contact-icons" icon={faFacebookF} />
                        <FontAwesomeIcon className="contact-icons" icon={faThreads} />
                        <FontAwesomeIcon className="contact-icons" icon={faPinterestP} />
                    </div>
                </div>
                <div className="section-two">
                    <Footer.LinkGroup className="footer-link-group">
                        <Footer.Link href="#">About Us</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Terms and Conditions</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <div className="section-three">
                    <div className="footer-title">Contact Us</div>
                    <div className="footer-contact">
                        <FontAwesomeIcon className="contact-icons" icon={faPhone} />
                        (000) 000 000
                    </div>
                    <div className="footer-contact">
                        <a
                            className="navbar-email"
                            href="mailto:enquiry@Fur-EverFound.com"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <FontAwesomeIcon className="contact-icons" icon={faEnvelope} />
                            enquiry@fur-everfound.com
                        </a>
                    </div>
                </div>
                <div className="section-four">
                    <div className="footer-title">Newsletter</div>
                    <div className="subscribe">
                        <p>Subscribe for updates</p>
                        <SubscriptionForm />
                    </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="footer-copyright">
                <span>© 2024 Fur-Ever Found. All Rights Reserved.</span>
            </div>
        </Footer>
    );
}

export default FooterCom;