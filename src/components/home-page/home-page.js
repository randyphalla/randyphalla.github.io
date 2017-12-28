import React, { Component } from 'react';
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
                        description: ''
                    }
                ]
            }
        ];;

    }

    render() {
        return (
            <div id="main-content">
                <section id="banner">
                    <h2 className="hidden">Banner Section</h2>
                    <div className="container">
                        <h3>I am a <span className="bold-text">Graphic Designer</span> & <span className="bold-text">Front End Developer</span> based in<span className="bold-text"> London Ontario</span></h3>
                    </div>
                </section>
                
                <section id="portfolio-pieces">
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
                                1
                            </div>

                            <div className="col-12 col-md-6 portfolio-item">
                                2
                            </div>

                            <div className="col-12 col-md-6 portfolio-item">
                                3
                            </div>

                            <div className="col-12 col-md-6 portfolio-item">
                                4
                            </div>

                            <div className="col-12 col-md-6 portfolio-item">
                                5
                            </div>

                            <div className="col-12 col-md-6 portfolio-item">
                                6
                            </div>

                            <div className="col-12 col-md-6 portfolio-item">
                                7
                            </div>

                            <div className="col-12 col-md-6 portfolio-item">
                                8
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section id="services">
                    <h2 className="hidden">Services</h2>
                    <div className="container">
                        <div className="row">
                            <div>
                                <h3>Services</h3>   
                            </div>
                        </div>
                    </div>
                </section> */}

            </div>
        );
    }
}

export default HomePage;
