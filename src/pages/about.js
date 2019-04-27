import React from "react";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from '../components/banner/banner';
import './about.scss';

class AboutPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            skills: [
                {
                    title: 'HTML5'
                },
                {
                    title: 'CSS3 (SCSS)'
                },
                {
                    title: 'Bootstrap'
                },
                {
                    title: 'JavaScript (ES6)'
                },
                {
                    title: 'Angular 2-7'
                },
                {
                    title: 'Ionic'
                },
                {
                    title: 'ReactJS'
                },
                {
                    title: 'React Native'
                },
                {
                    title: 'Git'
                },
                {
                    title: 'Bitbucket'
                },
                {
                    title: 'GitHub'
                },
                {
                    title: 'Sketch'
                },
                {
                    title: 'Adobe PhotoShop & Illustrator'
                }
            ],
            experiences: [
                {
                    title: 'Devlift Media - Web Developer',
                    started: 'Dec 2016 - Present'
                },
                {
                    title: 'BuzzPR - Graphic Design Intern',
                    started: 'Aug 2016 - Sept 2016'
                }
            ],
            educations: [
                {
                    title: 'Fanshawe College - Interactive Media Specialist',
                    started: '2015 - 2016'
                },
                {
                    title: 'Fanshawe College - Graphic Design',
                    started: '2011 - 2014'
                }
            ]
        }
    }

    render() {

        const { skills, experiences, educations } = this.state;

        return (
            <Layout>

                <SEO 
                    title="About" 
                    keywords={[]} 
                />

                <Banner 
                    title="About" 
                    description=""
                />

                <section className="about-me about-me-1"> 
                    <h2 className="hidden">About Section</h2>
                    <div className="container">
                        <div className="about-me__paragraph">
                            <h3 className="title-1">About me</h3>
                            <p className="about-me__body">I’m a Web Developer and Designer based London, Ontario Canada. I am passionate from about creating aesthetically websites and designs. I can help you translate your PSDs or design files and prototype them into web or mobile. I’m currently working at Devlift Media as a Web Developer, where I take designs and prototype them into the web or mobile apps.</p>
                            <a href="../assets/files/Randy Phalla's Resume.pdf" download>
                                <button className="rp-btn primary-btn">Resume</button>                  
                            </a>
                        </div>
                        <div className="about-me__logo">
                            <div className="about-me__logo-avatar"></div>
                        </div>
                    </div>
                </section>

                <section className="techincal-skils">
                    <h2 className="hidden">Techincal Skils Section</h2>
                    <div className="container">
                        <h3 className="title-1">Techincal Skils</h3>  
                        <div className="techincal-skils__lists">
                            {
                                skills.map((item, i) => {
                                    return (
                                        <div className="techincal-skils__list-item" key={i}>
                                            <p className="techincal-skils__list-item-title">{item.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                <section className="work-experience">
                    <h2 className="hidden">Work Experience Section</h2>
                    <div className="container">
                        <h3 className="title-1">Work Experience</h3>
                        <div className="work-experience__list">
                            {
                                experiences.map((experience, i) => {
                                    return (
                                        <div className="work-experience__list-item mb-35" key={i}>
                                            <h4 className="work-experience__list-item-title">{experience.title}</h4>
                                            <p className="work-experience__list-item-body">{experience.started}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                <section className="work-experience">
                    <h2 className="hidden">Work Experience Section</h2>
                    <div className="container">
                    <h3 className="title-1">Education</h3>
                        <div className="work-experience__list">
                            {
                                educations.map((education, i) => {
                                    return (
                                        <div className="work-experience__list-item mb-35" key={i}>
                                            <h4 className="work-experience__list-item-title">{education.title}</h4>
                                            <p className="work-experience__list-item-body">{education.started}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

            </Layout>
        )
    }

}

export default AboutPage
