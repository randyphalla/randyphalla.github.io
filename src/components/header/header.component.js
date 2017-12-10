import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.component.css';

import logo from '../../images/logo.png';

class HeaderComponent extends Component {
    
    // TODO: Create Toggle Function
    toggleMenu() {
        console.log('ES6');
    }
    
    render() {
        return (
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-4 logo">
                            <img src={logo} alt="Randy Phalla Logo"/>
                        </div>
                        <div className="col-6 mobile-menu">
                            <button className="btn" onClick={this.toggleMenu}>
                                <i className="fas fa-bars 5x"></i>
                            </button>
                        </div>
                        <div className="col-md-8 menu-links">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;
