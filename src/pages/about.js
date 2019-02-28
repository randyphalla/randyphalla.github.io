import React from "react";

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: true
        }
    }

    render() {
        return (
            <Layout>
                <SEO title="About" keywords={[]} />
            </Layout>
        )
    }

}

export default AboutPage
