import React, { Component } from 'react';
import './about-page.css';

class AboutPage extends Component {
  render() {
    return (
        <div>
            <section id="about">
                <h2 className="hidden">About Section</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-12"> 
                            <h3>Little bit about myself</h3>
                            <div className="under-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="intro">
                <h2 className="hidden">Intro Section</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4"></div>
                        <div className="col-12 col-md-8 intro-card"> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin maximus arcu, vitae imperdiet sapien. Nam scelerisque gravida massa, quis gravida purus dictum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin maximus arcu, vitae imperdiet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin maximus arcu, vitae imperdiet sapien. Nam scelerisque gravida massa.</p>
                        </div>  
                    </div>
                </div>
            </section>

            <section id="skills">
                <h2 className="hidden">Skills Section</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-12"> 
                            <h3>Technical Skills</h3>
                        </div>  
                    </div>
                    <div className="row">
                        <div className="col-12"> 
                        
                        </div>  
                    </div>
                </div>
            </section>


        </div>
    );
  }
}

export default AboutPage;
