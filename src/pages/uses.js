import React, { useState, useEffect } from "react";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BannerAlt from '../components/banner-alt/banner-alt';
import './uses.scss';

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
        title: 'Monitors:',
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
        title: 'Chair ',
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
      <section className="uses">
        <h2 className="hidden">Uses Section</h2>
        <div className="container">

          {/* Softwares */}
          <div className="uses__header">
            <h3 className="uses__title">Softwares</h3>
          </div>

          <ul className="uses__list">
          {
            useSoftwares.map((software, i) => {
              return (
                <li className="uses__list-item" key={i}>
                  <span className="uses__list-item__name">{software.name}</span>
                </li>
              )
            }) 
          }
          </ul>

          {/* Hardwares */}
          <div className="uses__header">
            <h3 className="uses__title">Hardware</h3>
          </div>

          <ul className="uses__list">
          {
            useHardware.map((hardware, i) => {
              return (
                <li className="uses__list-item" key={i}>
                  <span className="uses__list-item__title">{hardware.title}</span> 
                  <span className="uses__list-item__name">{hardware.name}</span>
                </li>
              )
            }) 
          }
          </ul>

          {/* Others */}
          <div className="uses__header">
            <h3 className="uses__title">Others</h3>
          </div>
          
          <ul className="uses__list">
          {
            useOther.map((other, i) => {
              return (
                <li className="uses__list-item" key={i}>
                  <span className="uses__list-item__title">{other.title}</span> 
                  <span className="uses__list-item__name">{other.name}</span>
                </li>
              )
            }) 
          }
          </ul>

        </div>
      </section>
    </Layout>
  )    
}

export default UsesPage;
