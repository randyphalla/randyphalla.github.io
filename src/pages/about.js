import React from "react";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from '../components/banner/banner';
import './about.scss';

class AboutPage extends React.Component {

    constructor(props) {
        super(props);
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


                <section class="about"> 
                    <h2 class="hidden">About Section</h2>

                    <div class="container">

                        <div>
                            <h3>About me</h3>
                            <p>PhantomJS is also known as API that aims to create is one of functions of a given context in game development, the object that HTML and performance limitations inherent to add client-side I/O, such as Dynamic HTML pages, also be universal when its dependents, called observers, and respective standard libraries, the model-view-controller pattern in the Document Object Model DOM in the framework originally created Ember is determined by caching the technology for Test-Driven Development. Closure.</p>
                            <button>Resume</button>
                        </div>

                        <div>
                            <img src="" alt="Randy Phalla" />
                        </div>


                    </div>

                </section>

                <section class="techincal-skils">
                    <h2 class="hidden">Techincal Skils Section</h2>

                    <div class="container">

                        <h3>Techincal Skils</h3>
                        
                        <div class="techincal-skils__lists">

                            <div class="techincal-skils__list-item">

                                <p>HTML</p>

                            </div>

                        </div>

                    </div>

                </section>

                <section class="work-experience">
                    <h2 class="hidden">Work Experience Section</h2>

                    <div class="container">

                        <h3>Work Experience</h3>

                        <div class="work-experience__list">

                            <div class="work-experience__list-item">
                                <h4>Devlift Media - Web Developer</h4>
                                <p>Dec 2016 - Present</p>
                            </div>

                        </div>

                        <h3>Education</h3>

                        <div class="work-experience__list">

                            <div class="work-experience__list-item">
                                <h4>Fanshawe College - Interactive Media Specialist</h4>
                                <p>2015 - 2016</p>
                            </div>

                        </div>

                    </div>

                </section>

            </Layout>
        )
    }

}

export default AboutPage
