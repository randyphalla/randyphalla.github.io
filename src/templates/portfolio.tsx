import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BannerAlt from '../components/banner-alt/banner-alt';

import { Card, CardAvatar, CardTitle, CardDescription } from '../theme/card.style';
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
            {projects.map((project, i: number) => {
              return (
                <Card key={i}>
                  <Link to={`${project.id}/`}>
                    <CardAvatar></CardAvatar>
                  </Link>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
