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
        if (window) {
            window.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 10) {
                    return setScrolling(true);
                } else {
                    return setScrolling(false);
                }
            });
        }
    }, []);

    return (
        <div>
            <header className={"header " + ( scrolling ? "header--is-active" : "header--is-not-active" )}>
                <h2 className="hidden">Header Section</h2>

                <div className="container">

                    <div className="logo">
                        <img className="logo__avatar" src={scrolling ? LogoRed : Logo} alt="Logo" />
                    </div>

                    <div className="mobile-menu">
                        <button 
                            className={"mobile-menu__button " + ( toggle ? "mobile-menu__button--is-active" : "mobile-menu__button--is-not-active" )}
                            onClick={() => setToggle(!toggle)}>    
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

/*
class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isToggle: false,
            isScrolling: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(prevState => ({
            isToggle: !prevState.isToggle
        }));
    }

    scrollingHeader() {
        if (window) {
            window.addEventListener('scroll', () => {
                if (document.documentElement.scrollTop > 10) {
                    this.setState({isScrolling: true})
    
                } else {
                    this.setState({isScrolling: false})
                }
            });
        }
    }

    componentDidMount() {
        this.scrollingHeader();
    }

    render() {
        return (
            <div>

                <header className={"header " + ( this.state.isScrolling ? "header--is-active" : "header--is-not-active" )}>
                    <h2 className="hidden">Header Section</h2>

                    <div className="container">

                        <div className="logo">
                            <img className="logo__avatar" src={this.state.isScrolling ? LogoRed : Logo} alt="Logo" />
                        </div>

                        <div className="mobile-menu">
                            <button className={"mobile-menu__button " + ( this.state.isToggle ? "mobile-menu__button--is-active" : "mobile-menu__button--is-not-active" )}
                                onClick={ () => this.toggleMenu() }>    
                                <FaBars />
                            </button>
                        </div>

                        <div className="desktop-menu">
                            <ul className="desktop-menu-links">
                                <li className="desktop-menu-links__item">
                                    <Link className="desktop-menu-links__item-link" to="/" activeClassName="current-page">Home</Link>
                                </li>
                                <li className="desktop-menu-links__item">
                                    <Link className="desktop-menu-links__item-link" to="/about" activeClassName="current-page">About</Link>
                                </li>
                                <li className="desktop-menu-links__item">
                                    <Link className="desktop-menu-links__item-link" to="/portfolio" activeClassName="current-page">Portfolio</Link>
                                </li>            
                                <li className="desktop-menu-links__item">
                                    <Link className="desktop-menu-links__item-link" to="/contact" activeClassName="current-page">Contact</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                
                </header>

                <SideMenu isToggle={ this.state.isToggle } />

            </div>
        )
    }
}

export default Header
*/