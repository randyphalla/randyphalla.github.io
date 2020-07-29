import styled from 'styled-components';

export const AboutMeSection = styled.section`
  padding-top: 16px;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
`;

export const AboutMeContainer = styled.div`
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

export const AboutMeProfileContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    padding: 16px;
  }
`;

export const AboutMeProfileAvatar = styled.img`
  height: 280px;
  width: 100%;

  background-color: var(--light-grey-color);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;

export const AboueMeParagraphContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const AboueMeParagraph = styled.p`
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

export const MySkillsSection = styled.section`
  margin-bottom: 16px;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 85%;
  }

  @media screen and (min-width: 992px) {
    width: 75%;
  }

  @media screen and (min-width: 1200px) {
    width: 70%;
  }
`;

export const MySkillsList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;

  display: flex;
  justify-items: center;
  align-items: flex-start;
  flex-wrap: wrap;

  &.uses-list {
    flex-direction: column;
  }
`;

export const MySkilsListItem = styled.li`
  position: relative;
  padding-top: 16px;
  padding-left: 44px;
  padding-right: 16px;
  padding-bottom: 16px;

  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 16px;

  &::after {
    content: '';
    position: absolute;
    top: 19px;
    left: 16px;

    height: 10px;
    width: 10px;

    background-color: var(--red-color);
    border-radius: 25px;

    opacity: 0.4;
  }

  &.uses-list-item {
    &::after {
      top: 21px;
    }
  }

  &.uses-list-item--hardware {
    &::after {
      top: 26px;
    }
  }
`;

export const MySkilsListItemTitle = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.8;
`;

export const MySkilsListItemName = styled.span`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.8;
`;

export const DefaultTitle = styled.h3`
  position: relative;

  display: block;
  margin-top: 32px;
  margin-bottom: 32px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 32px;

  background-color: var(--white-color);

  z-index: 3;

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 0;

    width: 100%;
    height: 3px;

    background: var(--red-color);

    z-index: -1;
    opacity: 0.5;
  }
`;

export const DefaultTitleSpan = styled.span`
  margin-left: -16px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--white-color);
`;

export const WorkEducationSection = styled.section``;

export const WorkEducationList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
`;

export const WorkEducationListItem = styled.li`
  margin-left: 16px;
  margin-bottom: 32px;
`;

export const WorkEducationCompanyName = styled.p`
  color: var(--black-color);
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

export const WorkEducationDateStarted = styled.span`
  color: var(--black-color);
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
`;

export const WorkEducationRole = styled.p`
  margin-top: 6px;
  margin-bottom: 6px;

  color: var(--black-color);
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

export const WorkEducationLink = styled.a`
  color: var(--black-color);
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 14px;
  text-decoration: underline;
`;

export const FeaturedProjectsSection = styled.section`
  padding-top: 0;
  padding-bottom: 60px;
`;

export const FeaturedProjectsProjects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: -15px;
  margin-right: -15px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    justify-content: flex-start;
  }
`;

export const ButtonContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 16px;
  }
`;
