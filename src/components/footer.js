import React from "react";

const Footer = () => (
    <footer className="footer">
        <h2 className="hidden">Footer Section</h2>
            
        <div className="container">
            <div className="">
                {/* LOGO */}
            </div>
            
            <div className="social-media">
                <h3 className="footer-title">Social Media</h3>
                <ul className="social-media__list">
                    <li className="social-media__list-item"></li>
                </ul>
            </div>

            <div className="lets-get-in-touch">
                <h3 className="footer-title">Let's Get In Touch</h3>
                <p className="">hello@randyphalla.ca</p>
            </div>
        </div>

        <div className="copyright">
            <p className="copyright__title">&copy; 2019 Randy Phalla. All Rights Reserved.</p>
        </div>

    </footer>
)

export default Footer
