import React from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Banner from '../components/banner/banner';

import './portfolio-details.scss';

class PortfolioDetailsPage extends React.Component {
    
    constructor(props) {
        super(props);
        
        // Gatsby Link
        // https://www.gatsbyjs.org/docs/gatsby-link/
        // https://www.terencelucasyap.com/gatsbyjs-build-user-listing-web-app-part-3/
        // console.log(this.props.location.state.project);
        
        this.state = {
            about: '1',
            role: '2',
            items: [
                {
                    id: 1,
                    thumbnail: '1',
                    name: '1',
                    altTag: '2',
                },
                {
                    id: 2,
                    thumbnail: '1',
                    name: '1',
                    altTag: '2',
                },
                {
                    id: 3,
                    thumbnail: '1',
                    name: '1',
                    altTag: '2',
                },
                {
                    id: 4,
                    thumbnail: '1',
                    name: '1',
                    altTag: '2',
                }
            ]
        }
    }

    render() {
        const { about, role, items } = this.state;

        return (
            <Layout>
                
                <SEO 
                    title="Portfolio Details" 
                    keywords={[]}
                />

                <Banner 
                    title="Portfolio 1" 
                    description="UI/UX Design"
                />

                {/* <section className="new-banner">
                    <h2 className="hidden">New Banner</h2>
                    <div className="container"> 
                        <div className="new-banner__cont">
                            <h3 className="new-banner__title">About</h3>
                            <p className="new-banner__paragraph">Web Developer and Designer based London, Ontario Canada.</p>
                        </div>
                    </div>
                </section> */}

                <section className="portfolio-details">
                    <h2 className="hidden">Portfolio Details</h2>           
                    <div className="container"> 
                        <div className="portfolio-details__about">
                            <h3 className="portfolio-title">Project Overview</h3>
                            <p className="portfolio-paragraph">{about}</p>  
                        </div>                       
                        <div className="portfolio-details__project-role">
                            <h3 className="portfolio-title">Project Role</h3>
                            <p className="portfolio-paragraph">{role}</p>  
                        </div>
                    </div>                  
                </section>

                <section className="portfolio-items">
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
                </section>

            </Layout>
        )
    }

}

export default PortfolioDetailsPage
