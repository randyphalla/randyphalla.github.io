import React from "react";
import { FaLinkedinIn, FaGithub, FaDribbble, FaBehance } from "react-icons/fa";

import './footer.scss';
import LogoRed from '../../assets/images/logo-red.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
            <h2 className="hidden">Footer Section</h2>

                <div className="border-container">
                    <div className="container">
                        <div className="footer-logo">
                            <img src={LogoRed} alt={LogoRed} />
                        </div>
                        
                        <div className="social-media">
                            <h3 className="footer-title">Social Media</h3>
                            <ul className="social-media__list">
                                <li className="social-media__list-item">
                                    <a href="https://www.linkedin.com/in/randyphalla/">
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li className="social-media__list-item">
                                    <a href="https://github.com/randyphalla">
                                        <FaGithub />
                                    </a>
                                </li>
                                <li className="social-media__list-item">
                                    <a href="https://dribbble.com/randyphalla">
                                        <FaDribbble />
                                    </a>
                                </li>
                                <li className="social-media__list-item">
                                    <a href="https://www.behance.net/randyphalla">
                                        <FaBehance />
                                    </a>
                                </li>
                            </ul>
                        </div>
            
                        <div className="lets-get-in-touch">
                            <h3 className="footer-title">Let's Get In Touch</h3>
                            <a className="footer-text footer-text-link" href="mailTo:randyphalla@gmail.com">randyphalla@gmail.com</a>
                        </div>
                    </div>
                </div>
        
                <div className="copyright">
                    <p className="copyright__title">&copy; 2019 Randy Phalla. All Rights Reserved.</p>
                </div>
    
            </footer>
        )
    }
}

export default Footer
