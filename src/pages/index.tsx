import React, { useState } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { StaticImage } from "gatsby-plugin-image";
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Banner from '../components/banner/banner';
import {
  AboutMeSection,
  AboutMeContainer,
  AboutMeProfileContainer,
  AboutMeParagraphContainer,
  AboutMeParagraph,
  AboutMeParagraphLink,
  Container,
  DefaultTitle,
  DefaultTitleSpan,
  FeaturedProjectsSection,
  MySkillsList,
  MySkillsSection,
  MySkilsListItem,
  MySkillsTitle,
} from '../theme/index.style';
import {
  Cards,
  Card,
  CardAvatar,
  CardTitle,
  CardDescription
} from '../theme/card.style';
import { Hidden } from '../theme/global.style';
import { FrontEndSkills, BackendSkills, ToolsSkills, Experiences, Educations, Projects } from '../config/data';
import { List } from '../components/list/list';
import PortfolioModal from '../components/portfolio-modal/portfolio-modal';

const IndexPage = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(Projects[0]);

  const openPortfolioModal = (data: any) => {
    trackProjectClick(data.id);
    setSelectedPortfolio(data);
    setOpen(!isOpen);
  }

  const closePortfolioModal = () => {
    trackProjectCloseModalClick(selectedPortfolio.id);
    setOpen(!isOpen);
  }

  const trackGA = (cat: string, action: string, label: string, value: any) => trackCustomEvent({category: cat, action: action, label: label, value: value});
  const trackProjectClick = (id: number) => trackGA('Home - Projects', 'Click', 'Open Modal', id);
  const trackProjectCloseModalClick = (id) => trackGA('Home - Projects', 'Click', 'Close Modal', id);

  return (
    <>
      <Layout>
        <SEO title="Home" keywords={[]} />

        <Banner
          id="home"
          helloThere="Hi! I'm"
          name="Randy Phalla"
          description="I specialize in responsive design, accessibility, and UI/UX."
        />

        <AboutMeSection id="about">
          <Hidden>About me Section</Hidden>
          <AboutMeContainer>
            <AboutMeProfileContainer>
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
            <AboutMeParagraphContainer>
              <AboutMeParagraph>
                I'm a Front-end Developer based in London, Ontario. I graduated from Fanshawe college with an advanced diploma in Graphic Design and a certificate in Interactive Media Specialist. I specialize in responsive design, accessibility, and UI/UX.
              </AboutMeParagraph>
              <AboutMeParagraph>
                I'm currently working at <AboutMeParagraphLink href="https://www.dentsucreative.com/" target="_blank" title="Go to Dentsu Creative Website" rel="noopener">Dentsu Creative</AboutMeParagraphLink> as a Senior Front End Developer. I led the frontend team at GM Live. In addition, My responsibilities include building user interfaces, implementing theming, new features into the platform, excelling in debugging and problem-solving.
              </AboutMeParagraph>
              <AboutMeParagraph>
                My previous role was at <AboutMeParagraphLink href="https://www.devlift.com" target="_blank" title="Go to Devlift Media Website" rel="noopener">Devlift Media</AboutMeParagraphLink> as a Full Stack Developer, I spearheaded both front-end and back-end projects, emphasizing web applications and mobile development. My responsibilities encompassed project management, component development, layout structuring, theming, code review, debugging, product deployment, client relationship development, and collaboration with designers, developers, and clients. Additionally, I took on a mentoring role, guiding junior developers in adopting best practices.
              </AboutMeParagraph>
              <AboutMeParagraph>
                As a developer, it's important to keep up with the ever evolving tech industry. I am always eager to learn new skills and technologies to add to my skill set.
              </AboutMeParagraph>
              <AboutMeParagraph>
                Outside of work, I enjoy interactive media, consuming culture through TV and film, and outdoor physical activities.
              </AboutMeParagraph>
            </AboutMeParagraphContainer>
          </AboutMeContainer>
        </AboutMeSection>

        <MySkillsSection id="skills">
          <Hidden>Skills</Hidden>
          <Container>
            <DefaultTitle dot>
              <DefaultTitleSpan>Skills</DefaultTitleSpan>
            </DefaultTitle>
            <MySkillsTitle>Frontend</MySkillsTitle>
            <MySkillsList>
              {FrontEndSkills && FrontEndSkills.map((item, index) => <MySkilsListItem key={index}>{item}</MySkilsListItem>)}
            </MySkillsList>
            <MySkillsTitle>Backend</MySkillsTitle>
            <MySkillsList>
              {BackendSkills && BackendSkills.map((item, index) => <MySkilsListItem key={index}>{item}</MySkilsListItem>)}
            </MySkillsList>
            <MySkillsTitle>Tools</MySkillsTitle>
            <MySkillsList>
              {ToolsSkills && ToolsSkills.map((item, index) => <MySkilsListItem key={index}>{item}</MySkilsListItem>)}
            </MySkillsList>
          </Container>
        </MySkillsSection>

        <List
          id="work-experiences"
          hiddenText="My Work Experience Section"
          title="Work Experience"
          items={Experiences}
        />

        <List
          id="education"
          hiddenText="My Education Section"
          title="Education"
          items={Educations}
        />

        <FeaturedProjectsSection id="projects">
          <Hidden>Featured Projects Section</Hidden>
          <Container>
            <DefaultTitle>
              <DefaultTitleSpan>Featured Projects</DefaultTitleSpan>
            </DefaultTitle>
            <Cards>
              {Projects && Projects.map((project, i) => {
                return (
                  <Card
                    key={i}
                    onClick={() => openPortfolioModal(project)}
                    role="button"
                    aria-label="Open Porfolio Modal"
                  >
                    <CardAvatar
                      src={project.imgSrc}
                      alt={project.imgSrcAlt}
                    ></CardAvatar>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.type}</CardDescription>
                  </Card>
                )
              })}
              {Projects && !Projects.length && (
                <div className="unavailable-project">
                  <p className="unavailable-project__text">There's currently no projects available at this moment</p>
                </div>
              )}
            </Cards>
          </Container>
        </FeaturedProjectsSection>

      </Layout>

      {isOpen && (
        <PortfolioModal
          isOpen={isOpen}
          // onAfterOpen={}
          onRequestClose={closePortfolioModal}
          portfolio={selectedPortfolio}
          contentLabel={`${selectedPortfolio} Modal`}
        />
      )}

    </>
  );
};

export default IndexPage;
