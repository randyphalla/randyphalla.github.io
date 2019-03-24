import React from "react";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from '../components/banner/banner';
import './about.scss';

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

                <SEO 
                    title="About" 
                    keywords={[]} 
                />

                <Banner 
                    title="About" 
                    description=""
                />
                
            </Layout>
        )
    }

}

export default AboutPage
