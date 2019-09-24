import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import './header.scss';
import Logo from '../../assets/images/logo.svg';
import LogoRed from '../../assets/images/logo-red.svg';

import { FaBars } from "react-icons/fa";
import SideMenu from '../side-menu/side-menu';

const Header = () => {
    
    const [toggle, setToggle] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {

        const headerScrolling = () => {
            if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
                return setScrolling(true);
            } else {
                return setScrolling(false);
            }
        }

        window.addEventListener('scroll', headerScrolling);

        return () => {
            window.removeEventListener('scroll', headerScrolling);
        };
        
    }, []);
    
    return (
        <div>
            <header className={"header " + ( scrolling ? "header--is-active" : "header--is-not-active" )}>
                <h2 className="hidden">Header Section</h2>

                <div className="container">

                    <div className="logo">
                        <Link to="/">
                            <img className="logo__avatar" src={scrolling ? LogoRed : Logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="mobile-menu">
                        <button
                            className={"mobile-menu__button " + ( toggle ? "mobile-menu__button--is-active" : "mobile-menu__button--is-not-active" )}
                            onClick={() => setToggle(!toggle)}
                            type="button">    
                            <FaBars />
                        </button>
                    </div>

                    <div className="desktop-menu">
                        <ul className="desktop-menu-links">
                            <li className="desktop-menu-links__item">
                                <Link 
                                    className="desktop-menu-links__item-link" 
                                    to="/" 
                                    activeClassName="current-page">
                                    Home
                                </Link>
                            </li>
                            <li className="desktop-menu-links__item">
                                <Link 
                                    className="desktop-menu-links__item-link" 
                                    to="/about" 
                                    activeClassName="current-page">
                                    About
                                </Link>
                            </li>
                            <li className="desktop-menu-links__item">
                                <Link 
                                    className="desktop-menu-links__item-link" 
                                    to="/portfolio" 
                                    activeClassName="current-page">
                                    Portfolio
                                </Link>
                            </li>            
                            <li className="desktop-menu-links__item">
                                <Link 
                                    className="desktop-menu-links__item-link" 
                                    to="/contact" 
                                    activeClassName="current-page">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            
            </header>

            <SideMenu isToggle={ toggle } />
            
        </div>
    )
}

export default Header