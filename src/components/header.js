import React from "react"
// import { Link } from "gatsby"
import './header.scss';
import Logo from '../assets/images/logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: true
        }
    }

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
                                <a className="desktop-menu-links__item-link" href="#">Home</a>
                            </li>
                            <li className="desktop-menu-links__item">
                                <a className="desktop-menu-links__item-link" href="#">About</a>
                            </li>
                            <li className="desktop-menu-links__item">
                                <a className="desktop-menu-links__item-link" href="#">Portfolio</a>
                            </li>            
                            <li className="desktop-menu-links__item">
                                <a className="desktop-menu-links__item-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </header>
        )
    }

}

export default Header
