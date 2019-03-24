import React from "react";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from '../components/banner/banner';

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: true
        }
    }

    render() {
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

            </Layout>
        )
    }

}

export default PortfolioPage
 