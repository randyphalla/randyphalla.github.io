import React from 'react';
import { FaLinkedinIn, FaGithub, FaDribbble, FaBehance } from 'react-icons/fa';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import {
  FooterSection,
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
  FooterCopyrightTitle,
} from './footer.style';
import LogoRed from '../../assets/images/logo-red.svg';
import { Hidden } from '../../theme/global.style';

const Footer = () => {
  const trackGA = (cat: string, action: string, label: string, value: number) => trackCustomEvent({category: cat, action: action, label: label, value: value});

  return (
    <FooterSection>
      <Hidden>Footer Section</Hidden>

      <BorderContainer>
        <FooterContainer>
          <FooterLogo>
            <FooterLogoImage src={LogoRed} alt="Randy Phalla's Logo" title="Randy Phalla's Logo" />
          </FooterLogo>

          <SocialMedia>
            <SocialMediaTitle>Social Media</SocialMediaTitle>
            <SocialMediaList>
              <SocialMediaListItem>
                <SocialMediaListItemLink
                  href="https://www.linkedin.com/in/randyphalla/"
                  aria-label="Linkedin Link"
                  title="Linkedin"
                  rel="noopener"
                  onClick={() => trackGA('Footer - Links', 'Click', 'Linkedin', 0)}
                >
                  <FaLinkedinIn />
                </SocialMediaListItemLink>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <SocialMediaListItemLink
                  href="https://github.com/randyphalla"
                  aria-label="Github Link"
                  title="Github"
                  rel="noopener"
                  onClick={() => trackGA('Footer - Links', 'Click', 'Github', 1)}
                >
                  <FaGithub />
                </SocialMediaListItemLink>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <SocialMediaListItemLink
                  href="https://dribbble.com/randyphalla"
                  aria-label="Dribbble Link"
                  title="Dribbble"
                  rel="noopener"
                  onClick={() => trackGA('Footer - Links', 'Click', 'Dribbble', 2)}
                >
                  <FaDribbble />
                </SocialMediaListItemLink>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <SocialMediaListItemLink
                  href="https://www.behance.net/randyphalla"
                  aria-label="Behance Link"
                  title="Behance"
                  rel="noopener"
                  onClick={() => trackGA('Footer - Links', 'Click', 'Behance', 3)}
                >
                  <FaBehance />
                </SocialMediaListItemLink>
              </SocialMediaListItem>
            </SocialMediaList>
          </SocialMedia>

          <LetGetInTouch>
            <LetGetInTouchTitle>Let's Get In Touch</LetGetInTouchTitle>
            <LetGetInTouchLink
              href="mailTo:randyphalla@gmail.com"
              aria-label="My email"
              title="Email"
              rel="noopener"
              onClick={() => trackGA('Footer - Links', 'Click', 'Email', 4)}
            >
              randyphalla@gmail.com
            </LetGetInTouchLink>
          </LetGetInTouch>
        </FooterContainer>
      </BorderContainer>

      <FooterCopyright>
        <FooterCopyrightTitle>&copy; 2024 Randy Phalla. All Rights Reserved.</FooterCopyrightTitle>
      </FooterCopyright>
    </FooterSection>
  );
};

export default Footer;
