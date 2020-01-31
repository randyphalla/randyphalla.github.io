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
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const headerScrolling = () => {
            if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
                return setScrolling(true);
            } else {
                return setScrolling(false);
            }
        }

        setLinks([
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Portfolio',
                link: '/portfolio'
            },
            {
                name: 'Uses',
                link: '/uses'
            },
            {
                name: 'Contact',
                link: '/contact'
            }
        ]);

        window.addEventListener('scroll', headerScrolling);

        return () => {
            window.removeEventListener('scroll', headerScrolling);
            setLinks([])
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
                            aria-label="Burger Menu">    
                            <FaBars />
                        </button>
                    </div>

                    <div className="desktop-menu">
                        <ul className="desktop-menu-links">
                            {
                                links.map((link, i) => {
                                    return (
                                        <li className="desktop-menu-links__item" key={i}>
                                            <Link 
                                                className="desktop-menu-links__item-link" 
                                                to={link.link} 
                                                activeClassName="current-page">
                                                {link.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>
            
            </header>

            <SideMenu isToggle={ toggle } />
            
        </div>
    )
}

export default Header