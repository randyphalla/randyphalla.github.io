import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.component.css';

class FooterComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer id="footer">
                <h2 className="hidden">Footer</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 social-links">
                            <ul>
                                <li>
                                    <Link to="https://www.behance.net/">
                                        <i className="fab fa-behance-square"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.behance.net/">
                                        <i className="fab fa-github"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.behance.net/">
                                        <i className="fab fa-dribbble"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.behance.net/">
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.behance.net/">
                                        <i className="fas fa-at"></i>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className="col-xs-12 col-md-6 copyright">
                            <p>Randy Phalla Design</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;
