import React from "react";
import { 
    FaLinkedinIn, 
    FaGithub, 
    FaDribbble, 
    FaBehance, 
    FaRegEnvelope 
} from "react-icons/fa";
import styled from "styled-components";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BannerAlt from '../components/banner-alt/banner-alt';
// import './contact.scss'

const Contact = styled.section`
    padding: 16px;
    margin-bottom: 60px;
`;

const ContactSocialMediaList = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (min-width: 576px) {
        flex-direction: row; 
        justify-content: center;
    }
`;

const ContactSocialMediaListItem = styled.div`
    padding: 16px;
    margin: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: #FF001F;
    box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.1);

    transition: all 300ms linear;

    svg {
        fill: white;
        width: 1.5em;
        height: 1.5em;
    }

    &:hover {
        background-color: transparent;

        svg { fill: #FF001F; }
    }

    @media screen and (min-width: 576px) {
        margin-left: 10px;
        margin-right: 10px;
        
        svg {
            width: 2em;
            height: 2em;
        }
    }
`;

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

            <Contact>
                <h2 className="hidden">Contact Section</h2>

                <ContactSocialMediaList>

                    <ContactSocialMediaListItem>
                        <FaLinkedinIn />
                    </ContactSocialMediaListItem>

                    <ContactSocialMediaListItem>
                        <FaGithub />
                    </ContactSocialMediaListItem>

                    <ContactSocialMediaListItem>
                        <FaDribbble />
                    </ContactSocialMediaListItem>

                    <ContactSocialMediaListItem>
                        <FaBehance />
                    </ContactSocialMediaListItem>
                    
                    <ContactSocialMediaListItem>
                        <FaRegEnvelope />
                    </ContactSocialMediaListItem>

                </ContactSocialMediaList>

            </Contact>

        </Layout>        
    )
}

export default ContactPage
