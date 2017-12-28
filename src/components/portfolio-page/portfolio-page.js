import React, { Component } from 'react';
import './portfolio-page.css';

class PortfolioPage extends Component {
    render() {
        return (
            <section id="portfolio">
                <h2 className="hidden">Portfolio Section</h2>

                <div className="portfolio-name">
                    <div className="container">
                        <div className="row">
                            <div className="col-12"> 
                                <h3>Project Name</h3>
                                <p>Graphic, Web, UI &  Editoral Design and Illustration</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-info">
                    <div className="container">
                        <div className="row portfolio-card">
                            <div className="col-12 col-md-6">
                                <h3>Objective</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat orci ac tortor placerat, a fermentum odio tincidunt. Sed at enim tincidunt mi elementum vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ac sem porta, convallis lorem a, cursus nulla. In hac habitasse platea dictumst. </p>
                            </div>
                            <div className="col-12 col-md-6">
                                <h3>Mission</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat orci ac tortor placerat, a fermentum odio tincidunt. Sed at enim tincidunt mi elementum vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ac sem porta, convallis lorem a, cursus nulla. In hac habitasse platea dictumst. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-pieces">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xs-6 col-md-4 portfolio-piece">
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default PortfolioPage;
