import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SkillItemComponent from '../skill-item/skill-item.component';

import adobeLogo from '../../images/programming-logos/adobecc1.png';
import angularLogo from '../../images/programming-logos/angular.png';
import bootstrapLogo from '../../images/programming-logos/bootstrap.png';
import css3Logo from '../../images/programming-logos/css3.png';
import foundation6Logo from '../../images/programming-logos/foundation6.png';
import gulpLogo from '../../images/programming-logos/gulp.png';
import html5Logo from '../../images/programming-logos/html5.png';
import ionicLogo from '../../images/programming-logos/ionic.png';
import javascriptLogo from '../../images/programming-logos/javascript.png';
import reactjsLogo from '../../images/programming-logos/reactjs.png';
import sketch3Logo from '../../images/programming-logos/sketch3.png';
import sourceTreeLogo from '../../images/programming-logos/Sourcetree-blue.png';
import sassLogo from '../../images/programming-logos/sass.png';
import typescriptLogo from '../../images/programming-logos/typescript.png';

import './about-page.css';

class AboutPage extends Component {

    skillItems;

    constructor(props) {
        super(props);

        this.skillItems = [
            {
                imageTitle: 'Adobe Creative Cloud',
                imageUrl: adobeLogo
            },
            {
                imageTitle: 'Sketch 3',
                imageUrl: sketch3Logo
            },
            {
                imageTitle: 'HTML55',
                imageUrl: html5Logo
            },
            {
                imageTitle: 'CSS3',
                imageUrl: css3Logo
            },
            {
                imageTitle: 'Sass',
                imageUrl: sassLogo
            },
            {
                imageTitle: 'Foundation 6',
                imageUrl: foundation6Logo
            },
            {
                imageTitle: 'Bootstrap 4',
                imageUrl: bootstrapLogo
            },
            {
                imageTitle: 'JavaScript',
                imageUrl: javascriptLogo
            },
            {
                imageTitle: 'TypescriptScript',
                imageUrl: typescriptLogo
            },
            {
                imageTitle: 'Angular',
                imageUrl: angularLogo
            },
            {
                imageTitle: 'Ionic Framework',
                imageUrl: ionicLogo
            },
            {
                imageTitle: 'ReactJS',
                imageUrl: reactjsLogo
            },
            {
                imageTitle: 'Gulp',
                imageUrl: gulpLogo
            },
            {
                imageTitle: 'Source Tree',
                imageUrl: sourceTreeLogo
            }
        ];

    }
    
    render() {
        return (
            <div id="main-content">
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
                            <div className="col-12 col-md-2 col-lg-4"></div>
                            <div className="col-12 col-md-10 col-lg-8 intro-card"> 
                                <p>About me intro</p>
                            </div>  
                        </div>
                    </div>
                </section>

                <section id="more-information">
                    <h2 className="hidden">More Information</h2>
                    <div className="container">

                        <div className="row">
                            <div className="col-12">
                                <h3>Education</h3>

                                <p>Fanshawe College 2015 - 2016</p>
                                <h4>Interactive Media Specialist</h4>
                                
                                <p>Fanshawe College 2011 - 2014</p>
                                <h4>Graphic Design</h4>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h3>Work Experience</h3>

                                <p>Devlift Media 2016 - Present</p>
                                <h4>Front-End Developer</h4>
                                <Link to="https://www.devlift.io" target="_blank" rel="noopener">www.devlift.io/</Link>

                                <p>Buzz PR Aug 2016 - Sept 2016</p>
                                <h4>Graphic Design Intern</h4>
                                <Link to="http://www.buzzpr.ca" target="_blank" rel="noopener">www.buzzpr.ca</Link>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h3>What I enjoy being a Designer / Developer</h3>
                                <p>I enjoy being designer & developer...</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <h3>Hobbies</h3>
                                <p>My hobbies are...</p>
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
                            {
                                this.skillItems.map((props, index) => {
                                    return <SkillItemComponent key={index} {...props} />
                                })
                            }
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default AboutPage;
