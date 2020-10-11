import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BannerAlt from '../components/banner-alt/banner-alt';

import { ProjectsItem, ProjectsItemAvatar, ProjectsItemTitle, ProjectsItemDescription } from '../theme/card.style';
import './portfolio.scss';
import { Hidden } from '../theme/global.style';

const PortfolioPage = ({ pageContext: { projects } }) => {
  return (
    <Layout>
      <SEO title="Portfolio" keywords={[]} />

      <BannerAlt title="Portfolio" description="" />

      <section className="portfolio">
        <Hidden>Portfolio Section</Hidden>

        <div className="container">
          <div className="projects">
            {projects.map((project, i) => {
              return (
                <ProjectsItem key={i}>
                  <Link to={`${project.id}/`}>
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
