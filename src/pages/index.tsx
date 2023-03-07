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
  AboueMeParagraphContainer,
  AboueMeParagraph,
  AboutMeParagraphLink,
  Container,
  DefaultTitle,
  DefaultTitleSpan,
  FeaturedProjectsSection,
} from '../theme/index.style';
import {
  Cards,
  Card,
  CardAvatar,
  CardTitle,
  CardDescription
} from '../theme/card.style';
import { Hidden } from '../theme/global.style';
import { Skills, Experiences, Educations, Projects } from '../config/data';
import { List } from '../components/list/list';
import { DotList } from '../components/dot-list/dot-list';
import PortfolioModal from '../components/portfolio-modal/portfolio-modal';

const IndexPage = () => {
  const [skills] = useState(Skills);
  const [experiences] = useState(Experiences);
  const [educations] = useState(Educations);
  const [projects] = useState(Projects);
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
          helloThere="Hello there, my name is"
          name="Randy Phalla"
          description="I specialize in accessibility, animations and UI/UX."
        />

        <AboutMeSection>
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
            <AboueMeParagraphContainer>
              <AboueMeParagraph>
                I'm a Full Stack Developer based in London, Ontario. I graduated from Fanshawe college with an advanced diploma in Graphic Design and a certificate in Interactive Media Specialist. I specialize in accessibility, animations and UI/UX.
              </AboueMeParagraph>
              <AboueMeParagraph>
                I'm currently working at <AboutMeParagraphLink href="https://www.devlift.com" target="_blank" title="Go to Devlift Media Website" rel="noopener">Devlift Media</AboutMeParagraphLink> as a Full Stack Developer. I lead front-end projects with a focus on web apps and mobile development. In addition, I manage projects, build components, structure layouts, theming, review and debug code, deploy products, develop client relationships, collaborate with designers, developers and clients, and mentor junior developers teaching best practices.
              </AboueMeParagraph>
              <AboueMeParagraph>
                As a developer, it's important to keep up with the ever evolving tech industry. I am always eager to learn new skills and technologies to add to my skill set.
              </AboueMeParagraph>
              <AboueMeParagraph>
                Outside of work, I enjoy interactive media, consuming culture through TV and film, and outdoor physical activities.
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

        <FeaturedProjectsSection>
          <Hidden>Featured Projects Section</Hidden>
          <Container>
            <DefaultTitle>
              <DefaultTitleSpan>Featured Projects</DefaultTitleSpan>
            </DefaultTitle>
            <Cards>
              {projects && projects.map((project, i) => {
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
              {projects && !projects.length && (
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
