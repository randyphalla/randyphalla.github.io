import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"

// const PortfolioPage = () => (
//   <Layout>
//     <SEO title="Portfolio" keywords={[]} />
//   </Layout>
// )

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
                <SEO title="Portfolio" keywords={[]} />
                <h3>Portfolio</h3>
            </Layout>
        )
    }

}


export default PortfolioPage
 