import React from "react";
import { Link } from "gatsby";

import './portfolio.scss';
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from '../components/banner/banner';
import { ProjectsItem, ProjectsItemAvatar, ProjectsItemTitle, ProjectsItemDescription } from '../theme/card.style';

class PortfolioPage extends React.Component {

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
                },
                {
                    id: 4,
                    title: 'Project 4',
                    description: 'UI Design'
                }
            ]
        }
    }

    render() {
        
        const { projects } = this.state;

        return (
            <Layout>

                <SEO 
                    title="Portfolio" 
                    keywords={[]} 
                />

                <Banner 
                    title="Portfolio" 
                    description=""
                /> 

                {/* <section className="new-banner">
                    <h2 className="hidden">New Banner</h2>
                    <div className="container"> 
                        <div className="new-banner__cont">
                            <h3 className="new-banner__title">Portfolio</h3>
                        </div>
                    </div>
                </section> */}

                <section className="portfolio">
                    <h2 className="hidden">Portfolio Section</h2>
                    
                    <div className="container">
                        {/* mt-60 */}
                        <div className="projects">

                            {
                                projects.map((project, i) => {
                                    return (
                                        <ProjectsItem key={i}>
                                            <Link 
                                                to={`/portfolio-details`}
                                                state={{project}}
                                            >
                                            {/*                                          
                                                <Link 
                                                to={`/portfolio-details/${i}`}
                                                state={{project}}
                                            > */}

                                                <ProjectsItemAvatar></ProjectsItemAvatar>
                                            </Link>
                                            <ProjectsItemTitle>{project.title}</ProjectsItemTitle>
                                            <ProjectsItemDescription>{project.description}</ProjectsItemDescription>
                                        </ProjectsItem>
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

export default PortfolioPage
 