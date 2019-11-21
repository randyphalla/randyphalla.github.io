import React, { useState, useEffect } from "react";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BannerAlt from '../components/banner-alt/banner-alt';
import './about.scss';

const AboutPage = () => {

    const [ skills, setSkills ] = useState([]);
    const [ experiences, setExperiences ] = useState([]);
    const [ educations, setEducations ] = useState([]);
    const [ hobbies, setHobbies ] = useState([]);

    useEffect(() => {

        setSkills([
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
                title: 'Foundation'
            },
            {
                title: 'JavaScript (ES6)'
            },
            {
                title: 'jQuery'
            },
            {
                title: 'Angular 2-8'
            },
            {
                title: 'Ionic'
            },
            {
                title: 'ReactJS'
            },
            {
                title: 'GatsbyJS'
            },
            {
                title: 'React Native'
            },
            // {
            //     title: 'Expo'
            // },
            // {
            //     title: 'Firebase'
            // },
            {
                title: 'Git'
            },
            {
                title: 'Sourcetree'
            },
            {
                title: 'GitHub'
            },
            {
                title: 'Sketch'
            },
            {
                title: 'Adobe Photoshop'
            },
            {
                title: 'Adobe Illustrator'
            }
        ]);

        setExperiences([
            {
                title: 'Devlift Media - Front-End Developer',
                started: 'Dec 2016 - Present'
            },
            {
                title: 'BuzzPR - Graphic Design Intern',
                started: 'Aug 2016 - Sept 2016'
            }
        ]);

        setEducations([
            {
                title: 'Fanshawe College - Interactive Media Specialist',
                started: '2015 - 2016'
            },
            {
                title: 'Fanshawe College - Graphic Design',
                started: '2011 - 2014'
            }  
        ]);

        setHobbies([
            {
                name: 'Games'
            },
            {
                name: 'Gym'
            },
            {
                name: 'Coffee'
            },
            {
                name: 'Eating'
            },
            {
                name: 'TV Shows and Movies'
            }
        ]);

        return () => {
            setSkills([]);
            setExperiences([]);
            setEducations([]);
            setHobbies([]);
        };

    }, []);

    return (
        <Layout>

            <SEO 
                title="About" 
                keywords={[]} 
            />

            <BannerAlt 
                title="About" 
                description="I’m a Web Developer and Designer based London, Ontario Canada. I am passionate from about creating aesthetically websites and designs. I can help you translate your PSDs or design files and prototype them into web or mobile. I’m currently working at Devlift Media as a Web Developer, where I take designs and prototype them into the web or mobile apps."
                isResume={true}
            />
            
            <section className="techincal-skils">
                <h2 className="hidden">Technical Skils Section</h2>
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

            <section className="work-experience">
                <h2 className="hidden">Hobbies and Interest Section</h2>
                <div className="container">
                <h3 className="title-1">Hobbies and Interest</h3>
                    <div className="work-experience__list">
                        {
                            hobbies.map((hobbie, i) => {
                                return (
                                    <div className="work-experience__list-item mb-35" key={i}>
                                        <h4 className="work-experience__list-item-title">{hobbie.name}</h4>
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

export default AboutPage
