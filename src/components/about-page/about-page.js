import React, { Component } from 'react';
import SkillItemComponent from '../skill-item/skill-item.component';


import adobeLogo from '../../images/programming-logos/adobecc.png';
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
                            {
                                this.skillItems.map((props, index) => {
                                    return <SkillItemComponent key={index} {...props}/>
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
