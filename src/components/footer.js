import React from "react";

import './footer.scss';

import LogoRed from '../assets/images/logo-red.svg';
import GitHubLogo from '../assets/images/logo-github.svg';
import BehanceLogo from '../assets/images/logo-behance.svg'; 
import DribbbleLogo from '../assets/images/logo-dribbble.svg';
import LinkedinLogo from '../assets/images/logo-linkedin.svg';

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
                                        <img src={LinkedinLogo} alt="Linkedin" />
                                    </a>
                                </li>
                                <li className="social-media__list-item">
                                    <a href="https://github.com/randyphalla">
                                        <img src={GitHubLogo} alt="Github" />
                                    </a>
                                </li>
                                <li className="social-media__list-item">
                                    <a href="https://github.com/randyphalla">
                                        <img src={DribbbleLogo} alt="Dribbble" />
                                    </a>
                                </li>
                                <li className="social-media__list-item">
                                    <a href="https://www.behance.net/randyphalla">
                                        <img src={BehanceLogo} alt="Behance" />
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
