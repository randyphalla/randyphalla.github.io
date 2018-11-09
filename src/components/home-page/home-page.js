import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home-page.css';

class HomePage extends Component {
	portfolioItems;

	constructor(props) {
		super(props);

		this.portfolioItems = [
			{
				id: 1,
				name: '',
				description: '',
				objective: '',
				mission: '',
				images: [
					{
						name: '',
						description: '',
					},
				],
			},
		];
	}

	render() {
		return (
			<div id="main-content">
				<section id="banner">
					<h2 className="hidden">Banner Section</h2>
					<div className="container">
						<h3>
							I am a <span className="bold-text">Graphic Designer</span> &{' '}
							<span className="bold-text">Front End Developer</span> based in<span className="bold-text">
								{' '}
								London Ontario
							</span>
						</h3>
					</div>
				</section>

				{/* <section id="portfolio-pieces">
                    <h2 className="hidden">Portfolio Pieces</h2>
                    <div className="container">

                        <div className="row">
                            <div className="col-12 feature-work">
                                <h3>Featured Work</h3>
                                <div className="under-line"></div>
                            </div>
                        </div>

                        <div className="row portfolio-items">

                            <div className="col-12 col-md-6 portfolio-item">
                                <Link to="/portfolio">1</Link>
                            </div>

                            <div className="col-12 col-md-6 portfolio-item">
                                <Link to="/portfolio">2</Link>
                            </div>

                        </div>
                    </div>
                </section> */}

				<section id="services">
					<h2 className="hidden">Services</h2>
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h3>Services</h3>
								<div className="under-line" />
							</div>
							{/* UI Design, Branding, and Web / App Development */}
						</div>
						<div className="row">
							<div className="col-12 col-md-4">
								<img src="" alt="Branding Icon" />
								<h4>Branding</h4>
							</div>
							<div className="col-12 col-md-4">
								<img src="" alt="UI Design Icon" />
								<h4>Web / UI Design</h4>
							</div>
							<div className="col-12 col-md-4">
								<img src="" alt="Web/App Icon" />
								<h4>Web / App Development</h4>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default HomePage;
