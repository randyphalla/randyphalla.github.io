import React from "react";
import './Footer.scss';
import LogoRed from '../assets/images/logo-red.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
            <h2 className="hidden">Footer Section</h2>

            <div class="border-container">
                <div className="container">
                    <div className="footer-logo">
                        <img src={LogoRed} alt={LogoRed} />
                    </div>
                    
                    <div className="social-media">
                        <h3 className="footer-title">Social Media</h3>
                        <ul className="social-media__list">
                            <li className="social-media__list-item">1</li>
                            <li className="social-media__list-item">2</li>
                            <li className="social-media__list-item">3</li>
                            <li className="social-media__list-item">4</li>
                        </ul>
                    </div>
        
                    <div className="lets-get-in-touch">
                        <h3 className="footer-title">Let's Get In Touch</h3>
                        <p className="footer-text">hello@randyphalla.ca</p>
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
