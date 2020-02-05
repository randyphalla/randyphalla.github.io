import React, { useState, useEffect } from "react";
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BannerAlt from '../components/banner-alt/banner-alt';
import { 
  Hidden,
  MySkillsSection,
  Container,
  MySkillsList,
  MySkilsListItem,
  MySkilsListItemTitle,
  MySkilsListItemName,
  DefaultTitle,
  DefaultTitleSpan
} from '../theme/index.style';

const UsesPage = () => {
  const [useSoftwares, setSoftwares] = useState([]);
  const [useHardware, setHardware] = useState([]);
  const [useOther, setOther] = useState([]);

  useEffect(() => {
    setSoftwares([
      {
        name: 'Google Chrome'
      },
      {
        name: 'Visual Studio Code (One Dark Pro and Material Icon Themes)'
      },
      {
        name: 'Terminal'
      },
      {
        name: 'Sourcetree'
      },
      {
        name: 'Trello'
      },
      {
        name: 'Slack'
      },
      {
        name: 'Discord'
      },
      {
        name: 'Spotify'
      },
      {
        name: 'Adobe Photoshop and Illustrator'
      },     
      {
        name: 'Sketch'
      },
      {
        name: 'Xcode'
      },
      {
        name: 'Android Studio'
      }
    ]);

    setHardware([
      {
        title: 'Laptop: ',
        name: 'MacBook Pro (Retina, 15-inch, Mid 2015)'  
      },
      {
        title: 'Keyboard: ',
        name: 'Logitech G810'  
      },
      {
        title: 'Mouse: ',
        name: 'Logitech G903'  
      },
      {
        title: 'Monitors: ',
        name: 'Two 27-inch Asus VP278H-P Gaming Monitor'  
      },
      {
        title: 'Headset: ',
        name: 'Bose QuietComfort 25 Over-Ear Noise Cancelling Headphones'  
      },
      {
        title: 'Phone: ',
        name: 'Samsung S7'  
      }
    ]);

    setOther([
      {
        title: 'Eyewear: ',
        name: 'Gunnar Intercept'
      },
      {
        title: 'Desk: ',
        name: 'BEKANT from Ikea'
      },
      {
        title: 'Chair: ',
        name: 'Hyken Technical Mesh Task Chair from Staples'
      }
    ]);

    return () => {
      setSoftwares([]);
      setHardware([]);
      setOther([]);
    } 
  }, []);

  return (
    <Layout>
      
      <SEO 
        title="Uses" 
        keywords={[]} 
      />

      <BannerAlt 
        title="Uses" 
        description="What I use"
      />

      <MySkillsSection>
        <Hidden>Softwares Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Softwares</DefaultTitleSpan>
          </DefaultTitle>  
          <MySkillsList className="uses-list">
            {
              useSoftwares.map((software, i) => {
                return (
                  <MySkilsListItem key={i}>{software.name}</MySkilsListItem>
                )
              })
            }
          </MySkillsList>
        </Container>
      </MySkillsSection>

      <MySkillsSection>
        <Hidden>Hardware Section</Hidden>
        <Container>
          <DefaultTitle>
            <DefaultTitleSpan>Hardware</DefaultTitleSpan>
          </DefaultTitle>  
          <MySkillsList className="uses-list">
            {
              useHardware.map((hardware, i) => {
                return (
                  <MySkilsListItem className="uses-list-item--hardware" key={i}>
                    <MySkilsListItemTitle>{hardware.title}</MySkilsListItemTitle> 
                    <MySkilsListItemName>{hardware.name}</MySkilsListItemName>
                  </MySkilsListItem>
                )
              })
            }
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
            {
              useOther.map((other, i) => {
                return (
                  <MySkilsListItem className="uses-list-item--hardware" key={i}>
                    <MySkilsListItemTitle>{other.title}</MySkilsListItemTitle> 
                    <MySkilsListItemName>{other.name}</MySkilsListItemName>
                  </MySkilsListItem>
                )
              })
            }
          </MySkillsList>
        </Container>
      </MySkillsSection>
      
    </Layout>
  )    
}

export default UsesPage;
