import React from "react";
import { 
    FaLinkedinIn, 
    FaGithub, 
    FaDribbble, 
    FaBehance, 
    FaRegEnvelope 
} from "react-icons/fa";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BannerAlt from '../components/banner-alt/banner-alt';

import './contact.scss'

const ContactPage = () => {
    return (
        <Layout>

            <SEO 
                title="Contact" 
                keywords={[]} 
            />

            <BannerAlt 
                title="Contact" 
                description="Let's Get in Touch"
            />

            <section className="contact">
                <h2 className="hidden">Contact Section</h2>

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
