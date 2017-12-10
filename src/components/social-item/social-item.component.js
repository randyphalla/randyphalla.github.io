import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './social-item.component.css';

class SocialItemComponent extends Component {
    render() {
        return (
            <Link to={this.props.link} >
                <i className={this.props.myClass}></i>
            </Link>
        );
    }
}

export default SocialItemComponent;
