// @flow
import React, { Component } from 'react';
import './social-item.component.css';

export type SocialItemProps = {
    link: string,
    googleTrack: Function,
    name: string,
    myClass: string
}

export type SocialItemState = {}

class SocialItemComponent extends Component<SocialItemProps, SocialItemState> {
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
