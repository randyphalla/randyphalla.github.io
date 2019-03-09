import React from "react";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

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
                <SEO title="Contact" keywords={[]} />
            </Layout>
        )
    }

}

export default ContactPage
