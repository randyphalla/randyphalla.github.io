import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { Hidden } from '../theme/global.style';

const NotFoundSection = styled.section`
  min-height: calc(100vh - 85px);
`;

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 80%;
  min-height: calc(100vh - 205px);
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    width: 85%;
  }

  @media screen and (min-width: 992px) {
    width: 75%;
  }

  @media screen and (min-width: 1200px) {
    width: 70%;
  }
`;

const NotFoundInfo = styled.div``;

const NotFoundSectionTitle = styled.h3`
  color: var(--red-color-1);
  font-size: 60px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

const NotFoundSectionBody = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;

  color: var(--red-color-1);
  font-size: 40px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
`;

const NotFoundButton = styled.button`
  padding: 5px 20px;

  color: var(--white-color);
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 30px;

  background-color: var(--red-color-1);
  border-radius: 8px;
  border: 3px solid transparent;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);

  transition: all 0.3s;

  &:hover {
    color: var(--red-color-1);
    border: 3px solid var(--red-color-1);
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404" keywords={[]} />
      <NotFoundSection>
        <Hidden>404 Section</Hidden>
        <NotFoundContainer>
          <NotFoundInfo>
            <NotFoundSectionTitle>404</NotFoundSectionTitle>
            <NotFoundSectionBody>Whoops, noting to see here!</NotFoundSectionBody>
            <Link to="/">
              <NotFoundButton type="button">Home</NotFoundButton>
            </Link>
          </NotFoundInfo>
        </NotFoundContainer>
      </NotFoundSection>
    </Layout>
  );
};

export default NotFoundPage;
