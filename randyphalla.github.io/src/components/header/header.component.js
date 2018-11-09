import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.component.css';

import logo from '../../images/logo.png';

class HeaderComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: false,
		};
	}

	toggleMenu() {
		this.setState({
			isActive: !this.state.isActive,
		});
	}

	render() {
		const { isActive } = this.state;

		return (
			// TODO: Use Bootstrap menu
			<div>
				<header id="header">
					<div className="container">
						<div className="row">
							<div className="col-6 col-md-4 logo">
								<Link to="/">
									<img src={logo} alt="Randy Phalla Logo" />
								</Link>
							</div>
							<div className="col-6 mobile-menu">
								<button className="btn" aria-label="Toggle Menu" onClick={this.toggleMenu.bind(this)}>
									<i className="fas fa-bars 5x" />
								</button>
							</div>
							<div className="col-md-8 menu-links">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									{/* <li><Link to="/portfolio">Portfolio</Link></li> */}
									<li>
										<Link to="/contact">Contact</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</header>
				{isActive && (
					<div className="mobile-links">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							{/* <li><Link to="/portfolio">Portfolio</Link></li> */}
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		);
	}
}

export default HeaderComponent;
