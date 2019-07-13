import React from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Banner from '../components/banner/banner';

import './portfolio-details.scss';


const PortfolioDetailsPage = ({
    pageContext: { 
        project 
    }
}) => {
    return (
        <Layout>
            
            <SEO 
                title={project.title} 
                keywords={[]}
            />

            <Banner 
                title={project.title} 
                description={project.description} 
            />

            <section className="portfolio-details">
                <h2 className="hidden">Portfolio Details</h2>           
                <div className="container"> 
                    <div className="portfolio-details__about">
                        <h3 className="portfolio-title">Project Overview</h3>
                        <p className="portfolio-paragraph">{project.about}</p>  
                    </div>                       
                    <div className="portfolio-details__project-role">
                        <h3 className="portfolio-title">Project Role</h3>
                        <p className="portfolio-paragraph">{project.role}</p>  
                    </div>
                </div>                  
            </section>

            {/* <section className="portfolio-items">
                <h2 className="hidden">Portfolio Items</h2>
                <div className="container">
                    <div className="portfolio-items__items">
                        {
                            items.map((item, index) => {
                                return (
                                    <div className="portfolio-item" key={index}>
                                        <div className="portfolio-item__image"></div>
                                        <p className="portfolio-item__title" key={index}>{item.name}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section> */}

        </Layout>
    )    
}

export default PortfolioDetailsPage
