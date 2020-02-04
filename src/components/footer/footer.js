import React from "react";
import { 
    FaLinkedinIn, 
    FaGithub, 
    FaDribbble, 
    FaBehance 
} from "react-icons/fa";
import {
    FooterSection,
    Hidden,
    BorderContainer,
    FooterContainer,
    FooterLogo,
    FooterLogoImage,
    SocialMedia,
    SocialMediaTitle,
    SocialMediaList,
    SocialMediaListItem,
    SocialMediaListItemLink,
    LetGetInTouch,
    LetGetInTouchTitle,
    LetGetInTouchLink,
    FooterCopyright,
    FooterCopyrightTitle
} from './footer.style';
import './footer.scss';
import LogoRed from '../../assets/images/logo-red.svg';


const Footer = () => {
    return (
        <FooterSection>
        <Hidden>Footer Section</Hidden>

            <BorderContainer>
                <FooterContainer>
                    <FooterLogo>
                        <FooterLogoImage src={LogoRed} alt={LogoRed} />
                    </FooterLogo>
                    
                    <SocialMedia>
                        <SocialMediaTitle>Social Media</SocialMediaTitle>
                        <SocialMediaList>
                            <SocialMediaListItem>
                                <SocialMediaListItemLink 
                                    href="https://www.linkedin.com/in/randyphalla/"
                                    aria-label="Linkedin Link"
                                >
                                    <FaLinkedinIn />
                                </SocialMediaListItemLink>
                            </SocialMediaListItem>
                            <SocialMediaListItem>
                                <SocialMediaListItemLink 
                                    href="https://github.com/randyphalla" 
                                    aria-label="Github Link"
                                >
                                    <FaGithub />
                                </SocialMediaListItemLink>
                            </SocialMediaListItem>
                            <SocialMediaListItem>
                                <SocialMediaListItemLink 
                                    href="https://dribbble.com/randyphalla" 
                                    aria-label="Dribbble Link"
                                >
                                    <FaDribbble />
                                </SocialMediaListItemLink>
                            </SocialMediaListItem>
                            <SocialMediaListItem>
                                <SocialMediaListItemLink 
                                    href="https://www.behance.net/randyphalla" 
                                    aria-label="Behance Link"
                                >
                                    <FaBehance />
                                </SocialMediaListItemLink>
                            </SocialMediaListItem>
                        </SocialMediaList>
                    </SocialMedia>
        
                    <LetGetInTouch>
                        <LetGetInTouchTitle>Let's Get In Touch</LetGetInTouchTitle>
                        <LetGetInTouchLink href="mailTo:randyphalla@gmail.com" aria-label="My email">
                            randyphalla@gmail.com
                        </LetGetInTouchLink>
                    </LetGetInTouch>
                </FooterContainer>
            </BorderContainer>
    
            <FooterCopyright>
                <FooterCopyrightTitle>&copy; 2020 Randy Phalla. All Rights Reserved.</FooterCopyrightTitle>
            </FooterCopyright>

        </FooterSection>       
    )
}

export default Footer
