import styled from 'styled-components';

export const AboutMeSection = styled.section`
  padding-top: 16px;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 60px;
  }
`;

export const AboutMeContainer = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
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
  @media screen and (min-width: 768px) {
    height: 280px;
    width: 280px;
    background-color: var(--light-grey-color);
    border-radius: 8px;
  }
`;

export const AboueMeParagraphContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const AboueMeParagraph = styled.p`
  margin: 0;
  margin-bottom: 16px;

  color: var(--black-color-1);
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 30px;

  @media screen and (min-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const AboutMeParagraphLink = styled.a`
  color: var(--black-color-1);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`

export const MySkillsSection = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const Container = styled.div`
  margin: 0 auto;
`;

export const MySkillsList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0;
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
  padding-left: 32px;
  padding-right: 16px;
  padding-bottom: 16px;

  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 16px;

  &::after {
    content: '';
    position: absolute;
    top: 19px;
    /* left: 16px; */
    left: 0;

    height: 10px;
    width: 10px;

    background-color: var(--black-color-1);
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
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
`;

export const DefaultTitle = styled.h3`
  position: relative;

  display: block;
  margin-top: 0;
  margin-bottom: ${props => props.dot ? 0 : 16}px;

  color: var(--black-color-3);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;

  background-color: var(--white-color);
  z-index: 3;
`;

export const DefaultTitleSpan = styled.span`
  /* margin-left: -16px; */
  /* padding-left: 16px;
  padding-right: 16px; */
  /* background-color: var(--white-color); */
`;

export const WorkEducationSection = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const WorkEducationList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

export const WorkEducationListItem = styled.li`
  /* margin-left: 16px; */
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const WorkEducationCompanyName = styled.p`
  color: var(--black-color-1);
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

export const WorkEducationDateStarted = styled.span`
  color: var(--black-color-1);
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
`;

export const WorkEducationRole = styled.p`
  margin-top: 6px;
  margin-bottom: 6px;

  color: var(--black-color-1);
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

export const WorkEducationLink = styled.a`
  color: var(--black-color-1);
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;
`;

export const FeaturedProjectsSection = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;
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
