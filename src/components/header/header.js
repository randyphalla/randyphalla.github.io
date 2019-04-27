import React from "react"
import { Link } from "gatsby"
import './header.scss';
import Logo from '../../assets/images/logo.svg';
import LogoRed from '../../assets/images/logo-red.svg';

import { FaBars } from "react-icons/fa";
import SideMenu from '../side-menu/side-menu';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isToggle: false,
            isScrolling: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);

        this.scrollingHeader();
    }

    toggleMenu() {
        this.setState(prevState => ({
            isToggle: !prevState.isToggle
        }));
    }

    scrollingHeader() {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 10) {
                console.log('Header is Fixed');
                this.setState({isScrolling: true})

            } else {
                console.log('Header is Normal');
                this.setState({isScrolling: false})
            }
        });
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
