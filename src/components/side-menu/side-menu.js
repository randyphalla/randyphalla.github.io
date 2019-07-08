import React from "react"
import { Link } from "gatsby"

import './side-menu.scss';
import Logo from '../../assets/images/logo.svg';

const SideMenu = ({
    isToggle
}) => {
    return (
        <section className={"side-menu " + (isToggle ? "side-menu--is-active" : "side-menu--is-not-active")}>
            <h2 className="hidden">Side Menu</h2>
        
            <div className="side-menu__logo">
                <img className="side-menu__logo-avatar" src={Logo} alt="Logo" />
            </div>

            <ul className="side-menu__lists">
                <li className="side-menu__lists__item">
                    <Link to="/">Home</Link>
                </li>
                <li className="side-menu__lists__item">
                    <Link to="/about">About</Link>
                </li>
                <li className="side-menu__lists__item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="side-menu__lists__item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

        </section>       
    )
}

export default SideMenu
