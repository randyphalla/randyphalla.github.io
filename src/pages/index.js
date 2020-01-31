import React, { useState, useEffect} from "react"
import { Link } from "gatsby"
import './index.scss';
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Banner from '../components/banner/banner';
import { 
    ProjectsItem, 
    ProjectsItemAvatar, 
    ProjectsItemTitle, 
    ProjectsItemDescription 
} from '../theme/card.style';
import { 
    AboutMeSection,
    Hidden,
    AboutMeContainer,
    AboutMeProfileContainer,
    AboutMeProfileAvatar,
    AboueMeParagraphContainer,
    AboueMeParagraph
} from '../theme/index.style';

const IndexPage = () => {

    const [ skills, setSkills ] = useState([]);
    const [ experiences, setExperiences ] = useState([]);
    const [ educations, setEducations ] = useState([]);
    const [ hobbies, setHobbies ] = useState([]);
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        setSkills([
            // {
            //     title: 'Web Development',
            //     languages: [
            //         {
            //             name: 'HTML5'
            //         },
            //         {
            //             name: 'SCSS'
            //         },
            //         {
            //             name: 'Bootstrap'
            //         }
            //     ]
            // },
            // {
            //     title: 'JavaScript',
            //     languages: [
            //         {
            //             name: 'jQuery'
            //         },
            //         {
            //             name: 'ES6'
            //         },
            //         {
            //             name: 'TypeScript'
            //         },
            //         {
            //             name: 'Angular 2-8'
            //         },
            //         {
            //             name: 'Ionic'
            //         },
            //         {
            //             name: 'ReactJS'
            //         },
            //         {
            //             name: 'React Native'
            //         },
            //         {
            //             name: 'GatsbyJS'
            //         },
            //         {
            //             name: 'Firebase'
            //         }
            //     ]
            // },
            // {
            //     title: 'Version Control',
            //     languages: [
            //         {
            //             name: 'Git'
            //         },
            //         {
            //             name: 'Sourcetree'
            //         },
            //         {
            //             name: 'GitHub'
            //         }
            //     ]
            // },
            // {
            //     title: 'Softwares',
            //     languages: [
            //         {
            //             name: 'Adobe Photoshop & Illustrator'
            //         },
            //         {
            //             name: 'Sketch'
            //         },
            //         {
            //             name: 'Figma'
            //         },
            //         {
            //             name: 'VSC (Visual Studio Code)'
            //         }
            //     ]
            // }
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
                title: 'React Native'
            },
            {
                title: 'GatsbyJS'
            },
            {
                title: 'Firebase'
            },
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
            },
            {
                title: 'UI Design'
            }
        ]);

        setExperiences([
            {
                company: 'Devlift Media',
                started: 'Dec 2016 - Present',
                siteLink: 'https://devlift.com/',
                role: 'Front-End Web Developer',
            },
            {
                company: 'BuzzPR',
                started: 'Aug 2016 - Sept 2016',
                siteLink: 'http://www.buzzpr.ca/',
                role: 'Graphic Design Intern',
            }
        ]);

        setEducations([
            {
                school: 'Fanshawe College',
                program: 'Interactive Media Specialist',
                siteLink: 'https://www.fanshawec.ca/programs/ims1-interactive-media-specialist/next',
                started: 'Sept 2015 - Apr 2016'
            },
            {
                school: 'Fanshawe College',
                program: 'Graphic Design',
                siteLink: 'https://www.fanshawec.ca/programs/grd1-graphic-design/next',
                started: 'Sept 2011 - Apr 2014'
            }  
        ]);

        setHobbies([
            {
                name: 'Games (PS4, Switch, PC and Mobile)'
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

        setProjects([
            {
                id: 1,
                title: 'Smart Cart',
                description: 'UI Design'
            }
        ]);

        return () => {
            setSkills([]);
            setExperiences([]);
            setEducations([]);
            setHobbies([]);
            setProjects([]);
        }
    }, []);

    return (
        <Layout>
                
            <SEO title="Home" keywords={[]} />

            <Banner />
            
            <AboutMeSection>
                <Hidden>About me Section</Hidden>
                <AboutMeContainer>
                    <AboutMeProfileContainer>
                        <AboutMeProfileAvatar></AboutMeProfileAvatar>
                    </AboutMeProfileContainer>
                    <AboueMeParagraphContainer>
                        <AboueMeParagraph>I’m a Web Developer and Designer based London, Ontario Canada. I am passionate from about creating aesthetically websites and designs. I can help you translate your PSDs or design files and prototype them into web or mobile. I’m currently working at Devlift Media as a Web Developer, where I take designs and prototype them into the web or mobile apps.</AboueMeParagraph>
                    </AboueMeParagraphContainer>
                </AboutMeContainer>
            </AboutMeSection>

            {/* <section className="about-me">
                <h2 className="hidden">About me Section</h2>
                <div className="container">
                    <div className="about-me__logo">
                        <div className="about-me__logo-avatar"></div>
                    </div>
                    <div className="about-me__paragraph">
                        <p className="about-me__body">I’m a Web Developer and Designer based London, Ontario Canada. I am passionate from about creating aesthetically websites and designs. I can help you translate your PSDs or design files and prototype them into web or mobile. I’m currently working at Devlift Media as a Web Developer, where I take designs and prototype them into the web or mobile apps.</p>
                    </div>
                </div>
            </section> */}

            <section className="my-skills">
                <h2 className="hidden">My Skills Section</h2>
                <div className="container">
                    <h3 className="work-education__title">
                        <span className="work-education__title__span">Skills</span>
                    </h3>  
                    <ul className="my-skills__list">
                        {
                            skills.map((skill, i) => {
                                return (
                                    <li className="my-skills__item" key={i}>
                                        {skill.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>

            <section className="work-education">
                <h2 className="hidden">My Work Experience Section</h2>
                <div className="container">
                    <h3 className="work-education__title">
                        <span className="work-education__title__span">Work Experience</span>
                    </h3>  
                    <ul className="work-education__list">
                        {
                            experiences.map((experience, i) => {
                                return (
                                    <li className="work-education__item" key={i}>
                                        <p className="work-education__item__company">
                                            {experience.company} -
                                            <span className="work-education__item__started"> {experience.started}</span>
                                        </p>
                                        <p className="work-education__item__role">{experience.role}</p>
                                        <a 
                                            className="work-education__item__link" 
                                            href={experience.siteLink}
                                        >
                                            {experience.siteLink}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>

            <section className="work-education">
                <h2 className="hidden">My Education Section</h2>
                <div className="container">
                    <h3 className="work-education__title">
                        <span className="work-education__title__span">Education</span>
                    </h3>  
                    <ul className="work-education__list">
                        {
                            educations.map((education, i) => {
                                return (
                                    <li className="work-education__item" key={i}>
                                        <p className="work-education__item__company">
                                            {education.school} - <span className="work-education__item__started"> {education.started}</span>
                                        </p>
                                        <p className="work-education__item__role">{education.program}</p>
                                        <a 
                                            className="work-education__item__link" 
                                            href={education.siteLink}
                                        >
                                            {education.siteLink}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>

            <section className="my-skills">
                <h2 className="hidden">My Hobbies Section</h2>
                <div className="container">
                <h3 className="work-education__title">
                        <span className="work-education__title__span">Hobbies</span>
                    </h3>  
                    <ul className="my-skills__list">
                        {
                            hobbies.map((hobbie, i) => {
                                return (
                                    <li className="my-skills__item" key={i}>
                                        {hobbie.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>

            <section className="featured-projects">
                <h2 className="hidden">Featured Projects Section</h2>
                <div className="container">                                           
                    <h3 className="work-education__title">
                        <span className="work-education__title__span">Featured Projects</span>
                    </h3>  
                    <div className="projects">
                        {           
                            projects.map((project, i) => {
                                return (
                                    <ProjectsItem key={i}>
                                        <Link to={`portfolio/${project.id}/`} aria-label="Project link">
                                            <ProjectsItemAvatar></ProjectsItemAvatar>
                                        </Link>
                                        <ProjectsItemTitle>{project.title}</ProjectsItemTitle>
                                        <ProjectsItemDescription>{project.description}</ProjectsItemDescription>
                                    </ProjectsItem>
                                )
                            })
                        }
                    </div>                    
                    <Link to="/portfolio">
                        <button 
                            className="default-btn primary-btn" 
                            aria-label="View All Projects" 
                            type="button">
                            View All Projects
                        </button>
                    </Link>
                </div>
            </section>

        </Layout>
    )
}

export default IndexPage
