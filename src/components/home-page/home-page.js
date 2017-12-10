import React, { Component } from 'react';
import './home-page.css';

class HomePage extends Component {
  render() {
    return (
        <div>
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
                        <div className="col-12 col-md-6">
                        1
                        </div>
                        <div className="col-12 col-md-6">
                        1
                        </div>
                        <div className="col-12 col-md-6">
                        1
                        </div>
                        <div className="col-12 col-md-6">
                        1
                        </div>
                        <div className="col-12 col-md-6">
                        1
                        </div>
                        <div className="col-12 col-md-6">
                        1
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default HomePage;
