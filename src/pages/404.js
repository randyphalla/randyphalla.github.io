import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"


const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    )   
}

// class NotFoundPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isTrue: true
//         }
//     }

//     render() {
//         return (
//             <Layout>
//                 <SEO title="404: Not found" />
//                 <h1>NOT FOUND</h1>
//                 <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//             </Layout>
//         )
//     }

// }

export default NotFoundPage
