import styled from 'styled-components';

export const FooterSection = styled.div`
  background-color: var(--white-color);
`;

export const BorderContainer = styled.div`
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

export const FooterLogo = styled.div`
  padding: 16px;
`;

export const FooterLogoImage = styled.img``;

export const SocialMedia = styled.div`
  padding: 16px;
`;

export const SocialMediaTitle = styled.h3`
  margin-bottom: 10px;

  color: var(--black-color-1);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const SocialMediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SocialMediaListItem = styled.li`
  display: flex;
  justify-content: center;

  width: 50%;
  padding-top: 10px;
  padding-bottom: 10px;

  &:last-child { padding-bottom: 0; }

  svg {
    width: 30px;
    height: 30px;
    fill: var(--black-color-1);

    transition: all 0.3s;

    &:hover { fill: var(--red-color-1) !important; }
  }

  &:first-child {
    svg {
      &:hover {
        fill: #0073b1 !important;
      }
    }
  }

  &:nth-child(2) {
    svg {
      &:hover {
        fill: #d8d8d8 !important;
      }
    }
  }

  &:nth-child(3) {
    svg {
      &:hover {
        fill: #ea4c89 !important;
      }
    }
  }

  &:last-child {
    svg {
      &:hover {
        fill: #0057ff !important;
      }
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

export const SocialMediaListItemLink = styled.a``;

export const LetGetInTouch = styled.div`
  padding: 16px;
`;

export const LetGetInTouchTitle = styled.h3`
  margin-bottom: 10px;

  color: var(--black-color-1);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const LetGetInTouchLink = styled.a`
  color: var(--black-color-1);
  font-size: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-decoration: none;

  transition: all 0.3s;

  &:hover {
    color: var(--red-color-1);
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export const FooterCopyrightTitle = styled.p`
  color: var(--black-color-1);
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 10px;
`;
