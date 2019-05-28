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
                    title="" 
                    description=""
                />
                
            </Layout>
        )
    }

}

export default PortfolioDetailsPage
