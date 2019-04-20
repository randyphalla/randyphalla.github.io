import React from "react";
import { FaLinkedinIn, FaGithub, FaDribbble, FaBehance, FaRegEnvelope } from "react-icons/fa";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from '../components/banner/banner';

import './contact.scss'

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

                <section class="contact">
                    <h2 class="hidden">Contact Section</h2>

                    <h3 class="contact__title">Let's Get In Touch</h3>

                    <div class="contact__social-media-lists">

                        <div class="contact__social-media-lists__item">
                            <FaLinkedinIn />
                        </div>

                        <div class="contact__social-media-lists__item">
                            <FaGithub />
                        </div>

                        <div class="contact__social-media-lists__item">
                            <FaDribbble />
                        </div>

                        <div class="contact__social-media-lists__item">
                         <FaBehance />
                        </div>
                        
                        <div class="contact__social-media-lists__item">
                            <FaRegEnvelope />
                        </div>

                    </div>

                </section>

            </Layout>
        )
    }

}

export default ContactPage
