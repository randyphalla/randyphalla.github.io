import React, { useState, useEffect } from 'react';
// import { Link } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Banner from '../components/banner/banner';
// import {
//   Card,
//   CardAvatar,
//   CardTitle,
//   CardDescription
// } from '../theme/card.style';
import {
  AboutMeSection,
  AboutMeContainer,
  AboutMeProfileContainer,
  // AboutMeProfileAvatar,
  AboueMeParagraphContainer,
  AboueMeParagraph,
  AboutMeParagraphLink,
  Container,
  DefaultTitle,
  DefaultTitleSpan,
  FeaturedProjectsSection,
  FeaturedProjectsProjects,
} from '../theme/index.style';
import { Hidden } from '../theme/global.style';
// import RandyPhallaProfile from '../images/me.jpeg';
import { Skills, Experiences, Educations, Hobbies, Projects } from '../config/data';
import { List } from '../components/list/list';
import { DotList } from '../components/dot-list/dot-list';
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [projects, setProjects] = useState([]);

  const trackGA = (cat: string, action: string, label: string, value: any) => trackCustomEvent({category: cat, action: action, label: label, value: value});
  const trackFeaturedPropjectsLink = (id: number) => trackGA('Featured Projects - Links', 'Click', 'Featured Projects', id);

  useEffect(() => {
    setSkills(Skills);
    setExperiences(Experiences);
    setEducations(Educations);
    setHobbies(Hobbies);
    setProjects(Projects);

    return () => {
      setSkills([]);
      setExperiences([]);
      setEducations([]);
      setHobbies([]);
      setProjects([]);
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
            {/* <AboutMeProfileAvatar
              src={RandyPhallaProfile}
              alt="Randy Phalla"
              title="Randy Phalla"
            ></AboutMeProfileAvatar> */}
            <StaticImage
              placeholder="blurred"
              layout="fixed"
              src="../images/me.jpeg"
              alt="Randy Phalla"
              title="Randy Phalla"
              width={280}
              height={280}
            />
          </AboutMeProfileContainer>
          <AboueMeParagraphContainer>
            <AboueMeParagraph>
              I’m a Front-end Developer and Designer based in London, Ontario Canada.
            </AboueMeParagraph>
            <AboueMeParagraph>
              I am passionate about creating aesthetically websites and designs. I can translate your artwork files (Photoshop, Illustrator, XD, Sketch, Figma, etc.) and prototype them into web or mobile using HTML5, CSS3, and JavaScript.
            </AboueMeParagraph>
            <AboueMeParagraph>
              I’m currently working at <AboutMeParagraphLink href="https://www.devlift.com" target="_blank" title="Go to Devlift Media Website" rel="noopener">Devlift Media</AboutMeParagraphLink> as a Web Developer, building websites and mobile apps with the latest web technologies such as HTML5, CSS3 (SCSS), JavaScript (ES5/6+), TypeScript, Angular, Ionic, ReactJS and React Native.
            </AboueMeParagraph>
          </AboueMeParagraphContainer>
        </AboutMeContainer>
      </AboutMeSection>

      <DotList
        hiddenText="My Skills Section"
        title="Skills"
        items={skills}
      />

      <List
        hiddenText="My Work Experience Section"
        title="Work Experience"
        items={experiences}
      />

      <List
        hiddenText="My Education Section"
        title="Education"
        items={educations}
      />

      <DotList
        hiddenText="My Hobbies and Interest Section"
        title="Hobbies and Interest"
        items={hobbies}
      />

      <FeaturedProjectsSection>
        <Hidden>Featured Projects Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Featured Projects</DefaultTitleSpan>
          </DefaultTitle>
          <FeaturedProjectsProjects>
            {/* {
              projects && projects.map((project, i) => {
                return (
                  <Card key={i}>
                    <Link
                      to={`portfolio/${project.id}/`}
                      aria-label="Project link"
                      onClick={() => trackFeaturedPropjectsLink(i)}
                    >
                      <CardAvatar></CardAvatar>
                    </Link>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </Card>
                )
              })
            }
            {projects && !projects.length && (
              <div className="unavailable-project">
                <p className="unavailable-project__text">There's currently no projects available at this moment</p>
              </div>
            )} */}
            <div className="unavailable-project">
              <p className="unavailable-project__text">There's currently no projects available at this moment</p>
            </div>
          </FeaturedProjectsProjects>
        </Container>
      </FeaturedProjectsSection>

    </Layout>
  );
};

export default IndexPage;
