import React from "react";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from '../components/banner/banner';

class ContactPage extends React.Component {
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
                    title="Contact" 
                    keywords={[]} 
                />

                <Banner 
                    title="Contact" 
                    description=""
                />

            </Layout>
        )
    }

}

export default ContactPage
