import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './social-item.component.css';

class SocialItemComponent extends Component {
    render() {
        return (
            <li>
                <Link to={this.props.link} target="_blank" rel="noopener">
                    <i className={this.props.myClass}></i>
                </Link>
            </li>
        );
    }
}

export default SocialItemComponent;
