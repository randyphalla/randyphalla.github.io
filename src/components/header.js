import React from "react"
import { Link } from "gatsby"
import './header.scss';
import Logo from '../assets/images/logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h2 className="hidden">Header Section</h2>

                <div className="container">

                    <div className="logo">
                        <img className="logo__avatar" src={Logo} alt="Logo" />
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
        )
    }
}

export default Header
