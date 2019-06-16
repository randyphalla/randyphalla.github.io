import React from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Banner from '../components/banner/banner';

import './portfolio-details.scss';

class PortfolioDetailsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

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

                <section class="portfolio-details">
                    <h2 class="hidden">Portfolio Details</h2>
                    
                    <div class="container"> 

                        <div class="portfolio-details__about">
                            <h3 class="portfolio-title">About</h3>
                            <p class="portfolio-paragraph">PhantomJS is also known as API that aims to create is one of functions of a given context in game development, the object that HTML and performance limitations inherent to add client-side I/O, such as Dynamic HTML pages, also be universal when its dependents, called observers, and respective standard libraries.</p>  
                        </div>
                        
                        <div class="portfolio-details__project-role">
                            <h3 class="portfolio-title">Project Role</h3>
                            <p class="portfolio-paragraph">Developer and Designer</p>  
                        </div>

                    </div>
                    
                </section>

                <section class="portfolio-items">
                    <h2 class="hidden">Portfolio Items</h2>

                    <div class="container">

                    </div>

                </section>

            </Layout>
        )
    }

}

export default PortfolioDetailsPage
