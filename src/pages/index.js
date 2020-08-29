import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Banner from '../components/banner/banner';
import {
  ProjectsItem,
  ProjectsItemAvatar,
  ProjectsItemTitle,
  ProjectsItemDescription
} from '../theme/card.style';
import {
  AboutMeSection,
  AboutMeContainer,
  AboutMeProfileContainer,
  AboutMeProfileAvatar,
  AboueMeParagraphContainer,
  AboueMeParagraph,
  AboutMeParagraphLink,
  MySkillsSection,
  Container,
  MySkillsList,
  MySkilsListItem,
  DefaultTitle,
  DefaultTitleSpan,
  WorkEducationSection,
  WorkEducationList,
  WorkEducationListItem,
  WorkEducationCompanyName,
  WorkEducationDateStarted,
  WorkEducationRole,
  WorkEducationLink,
  FeaturedProjectsSection,
  FeaturedProjectsProjects,
} from '../theme/index.style';
import { Hidden } from '../theme/global.style';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import RandyPhallaProfile from '../assets/images/me.jpeg';

const IndexPage = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [projects, setProjects] = useState([]);

  const trackGA = (cat, action, label, value) => trackCustomEvent({category: cat, action: action, label: label, value: value});
  const trackWorkExperiencesLink = (id) => trackGA('Work Experiences - Links', 'Click', 'Work Experience', id);
  const trackEducationLink = (id) => trackGA('Educations - Links', 'Click', 'Education', id);
  const trackFeaturedPropjectsLink = (id) => trackGA('Featured Projects - Links', 'Click', 'Featured Projects', id);

  useEffect(() => {
    setSkills([
      {
        name: 'HTML5',
      },
      {
        name: 'CSS3 (SCSS)',
      },
      {
        name: 'Bootstrap (3/4)',
      },
      {
        name: 'Responsive Web Design'
      },
      {
        name: 'JavaScript (ES5/6)',
      },
      {
        name: 'jQuery',
      },
      {
        name: 'Angular 2-8',
      },
      {
        name: 'Ionic',
      },
      {
        name: 'ReactJS (GatsbyJS & NextJS)',
      },
      {
        name: 'React Native',
      },
      {
        name: 'Storybook'
      },
      {
        name: 'Firebase',
      },
      {
        name: 'Git (Sourcetree & GitHub)',
      },
      {
        name: 'Sketch',
      },
      {
        name: 'Adobe Photoshop',
      },
      {
        name: 'Adobe Illustrator',
      },
      {
        name: 'UI Design',
      },
    ]);

    setExperiences([
      {
        company: 'Devlift Media',
        started: 'Dec 2016 - Present',
        role: 'Web Developer',
        siteLink: 'https://www.devlift.com',
      },
      {
        company: 'BuzzPR',
        started: 'Aug 2016 - Sept 2016',
        role: 'Graphic Design Intern',
        siteLink: 'https://www.buzzpr.ca',
      },
    ]);

    setEducations([
      {
        school: 'Fanshawe College',
        started: 'Sept 2015 - Apr 2016',
        program: 'Interactive Media Specialist',
        // siteLink: 'https://www.fanshawec.ca/programs/ims1-interactive-media-specialist/next',
      },
      {
        school: 'Fanshawe College',
        started: 'Sept 2011 - Apr 2014',
        program: 'Graphic Design',
        // siteLink: 'https://www.fanshawec.ca/programs/grd1-graphic-design/next',
      },
    ]);

    setHobbies([
      {
        name: 'Games (PS4, Switch, PC and Mobile)',
      },
      {
        name: 'Gym',
      },
      {
        name: 'Coffee',
      },
      {
        name: 'Eating',
      },
      {
        name: 'TV Shows and Movies',
      },
    ]);

    setProjects([
      // {
      //   id: 1,
      //   title: 'Smart Cart',
      //   description: 'UI Design',
      //   poster: ''
      // },
      // {
      //   id: 2,
      //   title: 'British Airways',
      //   description: 'UI Design',
      //   poster: ''
      // },
      // {
      //   id: 3,
      //   title: 'Car Dashboard',
      //   description: 'UI Design',
      //   poster: ''
      // },
      // {
      //   id: 4,
      //   title: 'Zane Barles',
      //   description: 'UI Design',
      //   poster: ''
      // },
      // {
      //   id: 5,
      //   title: 'COVID-19',
      //   description: 'Web Development',
      //   poster: ''
      // },
      // {
      //   id: 6,
      //   title: 'Pokédex',
      //   description: 'Web Development',
      //   poster: ''
      // },
      // {
      //   id: 7,
      //   title: 'Marvel App',
      //   description: 'Web Development',
      //   poster: ''
      // }
    ]);

    return () => {
      setSkills([]);
      setExperiences([]);
      setEducations([]);
      setHobbies([]);
      // setProjects([]);
    };
  }, []);

  return (
    <Layout>
      <SEO title="Home" keywords={[]} />

      <Banner
        helloThere="Hello there, my name is"
        name="Randy Phalla"
        description="I specialize in front-end development and user interface design."
      />

      <AboutMeSection>
        <Hidden>About me Section</Hidden>
        <AboutMeContainer>
          <AboutMeProfileContainer>
            <AboutMeProfileAvatar
              src={RandyPhallaProfile}
              alt="Randy Phalla's Profile"
            ></AboutMeProfileAvatar>
          </AboutMeProfileContainer>
          <AboueMeParagraphContainer>
            <AboueMeParagraph>
              I’m a Front-end Developer and Designer based in London, Ontario Canada.
            </AboueMeParagraph>
            <AboueMeParagraph>
              I am passionate about creating aesthetically websites and designs. I can translate your artwork files (Photoshop, Illustrator, Sketch, Figma, etc.) and prototype them into web or mobile using HTML5, CSS3, and JavaScript.
            </AboueMeParagraph>
            <AboueMeParagraph>
              I’m currently working at <AboutMeParagraphLink href="https://www.devlift.com" target="_blank" title="Go to Devlift Media Website" rel="noopener">Devlift Media</AboutMeParagraphLink> as a Web Developer, building websites and mobile apps with the latest web technologies such as HTML5, CSS3 (SCSS), JavaScript (ES5/6), TypeScript, Angular, Ionic, ReactJS and React Native.
            </AboueMeParagraph>
          </AboueMeParagraphContainer>
        </AboutMeContainer>
      </AboutMeSection>

      <MySkillsSection>
        <Hidden>My Skills Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Skills</DefaultTitleSpan>
          </DefaultTitle>
          <MySkillsList>
            {skills && skills.map((skill, i) => { return <MySkilsListItem key={i}>{skill.name}</MySkilsListItem>; })}
          </MySkillsList>
        </Container>
      </MySkillsSection>

      <WorkEducationSection>
        <Hidden>My Work Experience Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Work Experience</DefaultTitleSpan>
          </DefaultTitle>
          <WorkEducationList>
            {experiences &&
              experiences.map((experience, i) => {
                return (
                  <WorkEducationListItem key={i}>
                    <WorkEducationCompanyName>
                      {experience.company} -<WorkEducationDateStarted> {experience.started}</WorkEducationDateStarted>
                    </WorkEducationCompanyName>
                    <WorkEducationRole>{experience.role}</WorkEducationRole>
                    <WorkEducationLink
                      href={experience.siteLink}
                      aria-label={`Go to ${experience.company}`}
                      title={`Go to ${experience.company}`}
                      onClick={() => trackWorkExperiencesLink(i)}
                      rel="noopener"
                    >
                      {experience.siteLink}
                    </WorkEducationLink>
                  </WorkEducationListItem>
                );
              })}
          </WorkEducationList>
        </Container>
      </WorkEducationSection>

      <WorkEducationSection>
        <Hidden>My Education Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Education</DefaultTitleSpan>
          </DefaultTitle>
          <WorkEducationList>
            {educations &&
              educations.map((education, i) => {
                return (
                  <WorkEducationListItem key={i}>
                    <WorkEducationCompanyName>
                      {education.school} - <WorkEducationDateStarted> {education.started}</WorkEducationDateStarted>
                    </WorkEducationCompanyName>
                    <WorkEducationRole>{education.program}</WorkEducationRole>
                    {education && education.siteLink ? (
                      <WorkEducationLink
                        href={education.siteLink}
                        title={`Go to ${education.school} link`}
                        aria-label={`Go to ${education.school} link`}
                        onClick={() => trackEducationLink(i)}
                        rel="noopener"
                      >
                        {education.siteLink}
                      </WorkEducationLink>
                    ) : null}
                  </WorkEducationListItem>
                );
              })}
          </WorkEducationList>
        </Container>
      </WorkEducationSection>

      <MySkillsSection>
        <Hidden>My Hobbies Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Hobbies</DefaultTitleSpan>
          </DefaultTitle>
          <MySkillsList>
            {hobbies && hobbies.map((hobbie, i) => { return <MySkilsListItem key={i}> {hobbie.name}</MySkilsListItem>; })}
          </MySkillsList>
        </Container>
      </MySkillsSection>

      <FeaturedProjectsSection>
        <Hidden>Featured Projects Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Featured Projects</DefaultTitleSpan>
          </DefaultTitle>
          <FeaturedProjectsProjects>
            {
              projects && projects.map((project, i) => {
                return (
                  <ProjectsItem key={i}>
                    <Link
                      to={`portfolio/${project.id}/`}
                      aria-label="Project link"
                      onClick={() => trackFeaturedPropjectsLink(i)}
                    >
                      <ProjectsItemAvatar></ProjectsItemAvatar>
                    </Link>
                    <ProjectsItemTitle>{project.title}</ProjectsItemTitle>
                    <ProjectsItemDescription>{project.description}</ProjectsItemDescription>
                  </ProjectsItem>
                )
              })
            }
            {projects && !projects.length && (
              <div className="unavailable-project">
                <p className="unavailable-project__text">Theirs currently no projects available at this moment</p>
              </div>
            )}
          </FeaturedProjectsProjects>
        </Container>
      </FeaturedProjectsSection>
    </Layout>
  );
};

export default IndexPage;
