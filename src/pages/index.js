import React from "react"
// import { Link } from "gatsby"
import './index.scss';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from '../components/banner';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue: true
        }
    }

    render() {
        return (
            <Layout>
                <SEO title="Home" keywords={[]} />
                <Banner />
                
                <section className="about-me">
                    <h2 className="hidden">About me Section</h2>
                    <div className="container">
                        <div className="about-me__logo">
                            <div className="about-me__logo-avatar"></div>
                        </div>
                        <div className="about-me__paragraph">
                            <h3 className="about-me__title">Randy Phalla</h3>
                            <p className="about-me__body">I’m a Web Developer and Design based London, Ontario Canada. I am passionate from about creating aesthetically websites and designs. I can help you translate your PSDs or design files and prototype them into web or mobile. I’m currently working at Devlift Media as a Web Developer, where I take designs and prototype them into the web or mobile apps. </p>
                        </div>
                    </div>
                </section>


                <section className="featured-projects">
                    <h2 className="hidden">Featured Projects Section</h2>

                    <div className="container">
                                                
                        <h3 className="featured-projects-title">Featured Projects</h3>  

                        <div className="projects">
                            <div className="projects__item">
                                <div className="projects__item-avatar"></div>
                                <h4 className="projects__item-title">Project Name 1</h4>
                                <p className="projects__item-description">Logo Design 1</p>
                            </div>
                            <div className="projects__item">
                                <div className="projects__item-avatar"></div>
                                <h4 className="projects__item-title">Project Name 2</h4>
                                <p className="projects__item-description">Logo Design 2</p>
                            </div>
                            <div className="projects__item">
                                <div className="projects__item-avatar"></div>
                                <h4 className="projects__item-title">Project Name 3</h4>
                                <p className="projects__item-description">Logo Design 3</p>
                            </div>
                        </div>

                        <button className="rp-btn primary-btn">View All Projects</button>

                    </div>

                </section>

            </Layout>
        )
    }

}

export default IndexPage