import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialItemComponent from '../social-item/social-item.component';
import ReactGA from 'react-ga';
import './coming-soon-page.css';
import logo from '../../images/logo.png';

class ComingSoonPage extends Component {
	constructor(props) {
		super(props);

		this.socialItems = [
			{
				link: 'https://www.linkedin.com/in/randyphalla/',
				myClass: 'fab fa-linkedin-in',
				name: 'linkedin',
			},
			{
				link: 'https://github.com/randyphalla',
				myClass: 'fab fa-github',
				name: 'github',
			},
			{
				link: 'https://www.behance.net/randyphalla',
				myClass: 'fab fa-behance-square',
				name: 'behance',
			},
			{
				link: 'https://dribbble.com/randyphalla',
				myClass: 'fab fa-dribbble',
				name: 'dribbble',
			},
			{
				link: 'mailto:randyphalla@gmail.com',
				myClass: 'fas fa-at',
				name: 'mail',
			},
		];

		// Add your tracking ID created from https://analytics.google.com/analytics/web/#home/
		ReactGA.initialize('UA-111702075-1');
		// This just needs to be called once since we have no routes in this case.
        ReactGA.pageview(window.location.pathname);
        
        this.googleTrack = this.googleTrack.bind(this);

	}

    googleTrack(name) {

        ReactGA.event({
            category: 'Social Media',
            action: 'Click',
            label: 'Link'
        });

        ReactGA.outboundLink({
            label: name
        }, () => {
        });
    }

	render() {
		return (
			<section id="coming-soon">
				<h2 className="hidden">Coming Soon</h2>

				<div className="container">
					<div className="row logo">
						<div className="col-12">
							<img src={logo} alt="Randy Phalla's Logo" />
							<h3>Hello I'm <br /> <span>Randy Phalla</span></h3>
						</div>
					</div>

					<div className="row justify-content-center description">
						<div className="col-12 col-sm-10 col-md-8">
							<p><span>Front-End Developer</span> & <span>Graphic Designer</span> from <span>London, Ontario.</span></p>
							<p>Currently working at <Link to="https://devlift.io" rel="noopener" target="_blank" onClick={() => this.googleTrack('https://devlift.io')}>Devlift Media</Link> as a <span>Front End Developer.</span></p>
						</div>
					</div>

					<div className="row coming-soon-message">
						<div className="col-12">
							<h3>Website work in progress <br /> ( Coming Soon )</h3>
						</div>
					</div>

					<div className="row social-media-links">
						<div className="col-12">
							<ul>
								{this.socialItems.map((props, index) => {
									return <SocialItemComponent key={index} {...props} googleTrack={() => this.googleTrack(props.name)} />;
								})}
							</ul>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default ComingSoonPage;
