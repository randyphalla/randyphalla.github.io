import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BannerAlt from '../components/banner-alt/banner-alt';
import { Hidden } from '../theme/global.style';
import './portfolio-details.scss';

const PortfolioDetailsPage = ({ pageContext: { project } }) => {
  return (
    <Layout>
      <SEO title={project.title} keywords={[]} />

      <BannerAlt title={project.title} description={project.description} />

      <section className="portfolio-details">
        <Hidden>Portfolio Details</Hidden>
        <div className="container">
          <div className="portfolio-details__about">
            <h3 className="portfolio-title">Project Overview</h3>
            <p className="portfolio-paragraph">{project.about}</p>
          </div>
          <div className="portfolio-details__project-role">
            <h3 className="portfolio-title">Project Role</h3>
            <p className="portfolio-paragraph">{project.role}</p>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default PortfolioDetailsPage;
