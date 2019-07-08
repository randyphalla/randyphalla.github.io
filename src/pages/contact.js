import React from "react";
import { FaLinkedinIn, FaGithub, FaDribbble, FaBehance, FaRegEnvelope } from "react-icons/fa";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from '../components/banner/banner';

import './contact.scss'

const ContactPage = () => {
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

            {/* <section className="new-banner">
                <h2 className="hidden">New Banner</h2>
                <div className="container"> 
                    <div className="new-banner__cont">
                        <h3 className="new-banner__title">Contact</h3>
                        <p className="new-banner__paragraph">Let's Get In Touch</p>
                    </div>
                </div>
            </section> */}

            <section className="contact">
                <h2 className="hidden">Contact Section</h2>

                <h3 className="contact__title">Let's Get In Touch</h3>

                <div className="contact__social-media-lists">

                    <div className="contact__social-media-lists__item">
                        <FaLinkedinIn />
                    </div>

                    <div className="contact__social-media-lists__item">
                        <FaGithub />
                    </div>

                    <div className="contact__social-media-lists__item">
                        <FaDribbble />
                    </div>

                    <div className="contact__social-media-lists__item">
                        <FaBehance />
                    </div>
                    
                    <div className="contact__social-media-lists__item">
                        <FaRegEnvelope />
                    </div>

                </div>

            </section>

        </Layout>        
    )
}

export default ContactPage
