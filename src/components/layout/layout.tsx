import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../header/header';
import Footer from '../footer/footer';
import './layout.scss';
import { Hidden } from '../../theme/global.style';

type LayoutProps = {
  children?: ReactNode | string;
}

const Layout: FC<LayoutProps> = (props: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <main className="main">
          <Hidden>Main Content</Hidden>
          {props.children}
        </main>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
