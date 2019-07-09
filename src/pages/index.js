import React from "react"
import { Link } from "gatsby"
import './index.scss';

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Banner from '../components/banner/banner';
import { ProjectsItem, ProjectsItemAvatar, ProjectsItemTitle, ProjectsItemDescription } from '../theme/card.style';

class IndexPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [
                {
                    id: 1,
                    title: 'Project 1',
                    description: 'UI Design'
                },
                {
                    id: 2,
                    title: 'Project 2',
                    description: 'UI Design'
                },
                {
                    id: 3,
                    title: 'Project 3',
                    description: 'UI Design'
                }
            ],
            specializes: [
                {
                    id: 1,
                    title: 'Web Development',
                    description: ''
                },
                {
                    id: 2,
                    title: 'Prototyping',
                    description: ''
                },
                {
                    id: 3,
                    title: 'UI Design',
                    description: ''
                }
            ]
        }
    }

    render() {

        const { projects } = this.state;

        return (
            <Layout>
                
                <SEO 
                    title="Home" 
                    keywords={[]}
                />

                <Banner 
                    title="Randy Phalla" 
                    description="I am a web developer and designer that specialize in front end development and user interface design." 
                />
                
                <section className="about-me">
                    <h2 className="hidden">About me Section</h2>
                    <div className="container">
                        <div className="about-me__logo">
                            <div className="about-me__logo-avatar"></div>
                        </div>
                        <div className="about-me__paragraph">
                            <h3 className="about-me__title">Randy Phalla</h3>
                            <p className="about-me__body">I’m a Web Developer and Designer based London, Ontario Canada. I am passionate from about creating aesthetically websites and designs. I can help you translate your PSDs or design files and prototype them into web or mobile. I’m currently working at Devlift Media as a Web Developer, where I take designs and prototype them into the web or mobile apps. </p>
                        </div>
                    </div>
                </section>

                <section className="featured-projects">
                    <h2 className="hidden">Featured Projects Section</h2>
                    <div className="container">                                        
                        <h3 className="title-1">Specializes In</h3>                 
                        <div class="specializes">                           
                            <div class="specializes__item">
                                {/* 
                                    Icon    
                                    Title
                                    Description
                                */}
                            </div>
                            <div class="specializes__item">
                                {/* 
                                    Icon    
                                    Title
                                    Description
                                */}
                            </div>
                            <div class="specializes__item">
                                {/* 
                                    Icon    
                                    Title
                                    Description
                                */}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="featured-projects">
                    <h2 className="hidden">Featured Projects Section</h2>

                    <div className="container">
                                                
                        <h3 className="title-1">Featured Projects</h3>  

                        <div className="projects">

                            {
                                projects.map((project, i) => {
                                    return (
                                        <ProjectsItem key={i}>
                                            <Link to="/portfolio-details">
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
                            <button className="default-btn primary-btn">View All Projects</button>
                        </Link>

                    </div>

                </section>

            </Layout>
        )
    }

}

export default IndexPage
