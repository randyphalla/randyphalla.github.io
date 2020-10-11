import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BannerAlt from '../components/banner-alt/banner-alt';
import {
  MySkillsSection,
  Container,
  MySkillsList,
  MySkilsListItem,
  MySkilsListItemTitle,
  MySkilsListItemName,
  DefaultTitle,
  DefaultTitleSpan
} from '../theme/index.style';
import { Hidden } from '../theme/global.style';
import { Softwares, Hardwares, Others } from '../config/data';

const UsesPage = () => {
  const [softwares, setSoftwares] = useState([]);
  const [hardwares, setHardwares] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    setSoftwares(Softwares);
    setHardwares(Hardwares);
    setOthers(Others);

    return () => {
      setSoftwares([]);
      setHardwares([]);
      setOthers([]);
    };
  }, []);

  return (
    <Layout>
      <SEO title="Uses" keywords={[]} />

      <BannerAlt title="Uses" description="What I use" />

      <MySkillsSection>
        <Hidden>Softwares Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Softwares</DefaultTitleSpan>
          </DefaultTitle>
          <MySkillsList className="uses-list">
            {softwares && softwares.map((software, i) => <MySkilsListItem key={i}>{software.name}</MySkilsListItem> )}
          </MySkillsList>
        </Container>
      </MySkillsSection>

      <MySkillsSection>
        <Hidden>Hardware Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Hardwares</DefaultTitleSpan>
          </DefaultTitle>
          <MySkillsList className="uses-list">
            {hardwares && hardwares.map((hardware, i) =>
              <MySkilsListItem className="uses-list-item--hardware" key={i}>
                <MySkilsListItemTitle>{hardware.title}</MySkilsListItemTitle>
                <MySkilsListItemName>{hardware.name}</MySkilsListItemName>
              </MySkilsListItem>
            )}
          </MySkillsList>
        </Container>
      </MySkillsSection>

      <MySkillsSection>
        <Hidden>Others Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Others</DefaultTitleSpan>
          </DefaultTitle>
          <MySkillsList className="uses-list">
            {others && others.map((other, i) =>
              <MySkilsListItem className="uses-list-item--hardware" key={i}>
                <MySkilsListItemTitle>{other.title}</MySkilsListItemTitle>
                <MySkilsListItemName>{other.name}</MySkilsListItemName>
              </MySkilsListItem>
            )}
          </MySkillsList>
        </Container>
      </MySkillsSection>
    </Layout>
  );
};

export default UsesPage;
