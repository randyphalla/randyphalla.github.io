import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './social-item.component.css';

class SocialItemComponent extends Component {
	render() {
		return (
			<li>
				<a href={this.props.link} rel="noopener" target="_blank" onClick={this.props.googleTrack} aria-label={this.props.name}>
					<i className={this.props.myClass}>
						<span className="hidden">{this.props.name}</span>
					</i>
				</a>
			</li>
		);
	}
}

export default SocialItemComponent;