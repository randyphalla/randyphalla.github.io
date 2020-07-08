import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Banner from '../components/banner/banner';
import { ProjectsItem, ProjectsItemAvatar, ProjectsItemTitle, ProjectsItemDescription } from '../theme/card.style';
import {
  AboutMeSection,
  AboutMeContainer,
  AboutMeProfileContainer,
  AboutMeProfileAvatar,
  AboueMeParagraphContainer,
  AboueMeParagraph,
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

const IndexPage = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setSkills([
      {
        title: 'HTML5',
      },
      {
        title: 'CSS3 (SCSS)',
      },
      {
        title: 'Bootstrap (3/4)',
      },
      {
        title: 'JavaScript (ES5/6)',
      },
      {
        title: 'jQuery',
      },
      {
        title: 'Angular 2-8',
      },
      {
        title: 'ReactJS',
      },
      {
        title: 'GatsbyJS',
      },
      {
        title: 'NextJS',
      },
      {
        title: 'Ionic',
      },
      {
        title: 'React Native',
      },
      {
        title: 'Firebase',
      },
      {
        title: 'Git',
      },
      {
        title: 'Sourcetree',
      },
      {
        title: 'GitHub',
      },
      {
        title: 'Sketch',
      },
      {
        title: 'Adobe Photoshop',
      },
      {
        title: 'Adobe Illustrator',
      },
      {
        title: 'UI Design',
      },
    ]);

    setExperiences([
      {
        company: 'Devlift Media',
        started: 'Dec 2016 - Present',
        role: 'Front-End Web Developer',
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
      // },
      // {
      //   id: 2,
      //   title: 'British Airways',
      //   description: 'UI Design',
      // },
      // {
      //   id: 3,
      //   title: 'Car Dashboard',
      //   description: 'UI Design',
      // },
      // {
      //   id: 4,
      //   title: 'Zane Barles',
      //   description: 'UI Design',
      // },
      // {
      //   id: 6,
      //   title: 'COVID-19',
      //   description: 'UI Design & Web Development',
      // },
      // {
      //   id: 7,
      //   title: 'Pokédex',
      //   description: 'UI Design & Web Development',
      // },
      // {
      //   id: 8,
      //   title: 'Marvel App',
      //   description: 'UI Design & Web Development',
      // },
    ]);

    return () => {
      setSkills([]);
      setExperiences([]);
      setEducations([]);
      setHobbies([]);
      // setProjects([]);
    };
  }, []);

  function trackGA(cat, action, label, value) {
    trackCustomEvent({
      category: cat,
      action: action,
      label: label,
      value: value,
    });
  }

  function trackWorkExperiencesLink(id) {
    trackGA('Work Experiences - Links', 'Click', 'Work Experience', id);
  }

  function trackEducationLink(id) {
    trackGA('Educations - Links', 'Click', 'Education', id);
  }

  function trackFeaturedPropjectsLink(id) {
    trackGA('Featured Projects - Links', 'Click', 'Featured Projects', id);
  }

  return (
    <Layout>
      <SEO title="Home" keywords={[]} />

      <Banner
        helloThere="Hello there, I'm"
        name="Randy Phalla"
        description="I am a front end web developer and designer that specializes in front end development and user interface
        design."
      />

      <AboutMeSection>
        <Hidden>About me Section</Hidden>
        <AboutMeContainer>
          <AboutMeProfileContainer>
            <AboutMeProfileAvatar></AboutMeProfileAvatar>
          </AboutMeProfileContainer>
          <AboueMeParagraphContainer>
            <AboueMeParagraph>
              I’m a Web Developer and Designer based London, Ontario Canada. I am passionate from about creating
              aesthetically websites and designs. I can help you translate your PSDs or design files and prototype them
              into web or mobile. I’m currently working at Devlift Media as a Web Developer, where I take designs and
              prototype them into the web or mobile apps.
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
            {skills && skills.map((skill, i) => { return <MySkilsListItem key={i}>{skill.title}</MySkilsListItem>; })}
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
                    <WorkEducationLink href={experience.siteLink} onClick={trackWorkExperiencesLink(i)}>
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
                      <WorkEducationLink href={education.siteLink} onClick={trackEducationLink(i)}>
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
            {projects &&
              projects.map((project, i) => {
                return (
                  <ProjectsItem key={i}>
                    <Link
                      to={`portfolio/${project.id}/`}
                      aria-label="Project link"
                      onClick={trackFeaturedPropjectsLink(i)}
                    >
                      <ProjectsItemAvatar></ProjectsItemAvatar>
                    </Link>
                    <ProjectsItemTitle>{project.title}</ProjectsItemTitle>
                    <ProjectsItemDescription>{project.description}</ProjectsItemDescription>
                  </ProjectsItem>
                );
              })}
            {!projects.length && (
              <div className="unavailable-project">
                <p className="unavailable-project__text">Theres are currently no project unavailable at this time</p>
              </div>
            )}
          </FeaturedProjectsProjects>
        </Container>
      </FeaturedProjectsSection>
    </Layout>
  );
};

export default IndexPage;
