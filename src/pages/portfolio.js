import React from "react";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from '../components/banner/banner';
import styled from "styled-components";
import './portfolio.scss';

const ProjectsItem = styled.div `
    padding-top: 16px;
    padding-bottom: 16px;
    width: 100%;

    @media (min-width: 768px) {
        width: calc((100% / 2) - 16px);
    }

    @media (min-width: 992px) {
        width: calc((100% / 3) - 16px);
    }
`

const ProjectsItemAvatar = styled.img `
    height: 280px;
    width: 100%;
    background-color: #D8D8D8;
    border-radius: 8px;
`

const ProjectsItemTitle = styled.h4 `
    margin: 0;
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
`

const ProjectsItemDescription = styled.p `
    margin: 0;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
`

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

                <section class="portfolio">
                    <h2 class="hidden">Portfolio Section</h2>
                    
                    <div class="container">

                        <div class="projects mt-60">

                            {
                                projects.map((project, i) => {
                                    return (
                                        <ProjectsItem key={i}>
                                            <ProjectsItemAvatar></ProjectsItemAvatar>
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
 