import React from "react"
import { Link } from "gatsby"
import './header.scss';
import Logo from '../../assets/images/logo.svg';

import { FaBars } from "react-icons/fa";
import SideMenu from '../side-menu/side-menu';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isToggle: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);

    }

    toggleMenu() {
        this.setState(prevState => ({
            isToggle: !prevState.isToggle
        }));
    }

    render() {
        
        return (
            <div>

                <header className="header">
                    <h2 className="hidden">Header Section</h2>

                    <div className="container">

                        <div className="logo">
                            <img className="logo__avatar" src={Logo} alt="Logo" />
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
                                    <Link className="desktop-menu-links__item-link" to="/">Home</Link>
                                </li>
                                <li className="desktop-menu-links__item">
                                    <Link className="desktop-menu-links__item-link" to="/about">About</Link>
                                </li>
                                <li className="desktop-menu-links__item">
                                    <Link className="desktop-menu-links__item-link" to="/portfolio">Portfolio</Link>
                                </li>            
                                <li className="desktop-menu-links__item">
                                    <Link className="desktop-menu-links__item-link" to="/contact">Contact</Link>
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
