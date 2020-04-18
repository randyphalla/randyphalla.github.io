import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BannerAlt from '../components/banner-alt/banner-alt';

import { ProjectsItem, ProjectsItemAvatar, ProjectsItemTitle, ProjectsItemDescription } from '../theme/card.style';
import './portfolio.scss';

const PortfolioPage = ({ pageContext: { projects } }) => {
  return (
    <Layout>
      <SEO title="Portfolio" keywords={[]} />

      <BannerAlt title="Portfolio" description="" />

      <section className="portfolio">
        <h2 className="hidden">Portfolio Section</h2>

        <div className="container">
          <div className="projects">
            {projects.map((project, i) => {
              return (
                <ProjectsItem key={i}>
                  <Link to={`portfolio/${project.id}/`}>
                    <ProjectsItemAvatar></ProjectsItemAvatar>
                  </Link>
                  <ProjectsItemTitle>{project.title}</ProjectsItemTitle>
                  <ProjectsItemDescription>{project.description}</ProjectsItemDescription>
                </ProjectsItem>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
