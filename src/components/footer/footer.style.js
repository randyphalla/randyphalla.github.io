import styled from "styled-components";

export const FooterSection = styled.div`
  background-color: var(--white-color);
`;

export const Hidden = styled.h2 `
  display: none;
`;

export const BorderContainer = styled.div `
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding: 5px 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 85%;
  }

  @media screen and (min-width: 992px) {
    width: 75%;
  }

  @media screen and (min-width: 1200px) {
    width: 70%;
  }
`;

export const FooterLogo = styled.div `
  padding: 16px;
`;

export const FooterLogoImage = styled.img ``;

export const SocialMedia = styled.div `
  padding: 16px;
`;

export const SocialMediaTitle = styled.h3 `
  margin-bottom: 10px;
  
  color: var(--black-color);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const SocialMediaList = styled.ul `
  display: flex;  
  flex-wrap: wrap;

  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SocialMediaListItem = styled.li `
  display: flex;
  justify-content: center;

  width: 50%;
  padding-top: 10px;
  padding-bottom: 10px;

  &:last-child { padding-bottom: 0; }

  svg {
    width: 30px;
    height: 30px;
    fill: var(--black-color);

    transition: all 300ms linear;

    &:hover { 
      fill: var(--red-color) !important; 
    }
  }

  &:first-child {
    svg { 
      fill: #0073b1; 
    }
  }

  &:nth-child(2) {
    svg { 
      fill: #24292e; 
    }
  }

  &:nth-child(3) {
    svg { 
      fill: #ea4c89; 
    }
  }

  &:last-child {
    svg { 
      fill: #0057ff; 
    }
  }

  @media screen and (min-width: 768px) {
    width: inherit;

    svg {
      margin-right: 10px;

      &:last-child { margin-left: 0; }
    }
  }
`;

export const SocialMediaListItemLink = styled.li `

`;

export const LetGetInTouch = styled.div `
  padding: 16px;
`;

export const LetGetInTouchTitle = styled.h3 `
  margin-bottom: 10px;

  color: var(--black-color);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const LetGetInTouchLink = styled.a `
  color: var(--black-color);
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-decoration: none;

  transition: all 300ms ease;

  &:hover { color: var(--red-color); }
`;

export const FooterCopyright = styled.div `
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export const FooterCopyrightTitle = styled.p `
  color: var(--black-color);
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 10px;
`;