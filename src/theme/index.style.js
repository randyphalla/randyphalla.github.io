import styled from "styled-components";

const AboutMeSection = styled.section `
  padding-top: 16px;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
`;

const Hidden = styled.h2 `
  display: none;
`;

const AboutMeContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 85%;
  }

  @media screen and (min-width: 992px) {
    width: 75%;
  }

  @media screen and (min-width: 1200px) {
    width: 70%;
  }
`;

const AboutMeProfileContainer = styled.div `
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    padding: 16px;
  }
`;

const AboutMeProfileAvatar = styled.div `
  height: 280px;
  width: 100%;

  background-color: var(--light-grey-color);
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;

const AboueMeParagraphContainer = styled.div `
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

const AboueMeParagraph = styled.p `
  margin: 0;

  color: var(--black-color);
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export { 
  AboutMeSection, 
  Hidden, 
  AboutMeContainer,
  AboutMeProfileContainer,
  AboutMeProfileAvatar,
  AboueMeParagraphContainer,
  AboueMeParagraph
};