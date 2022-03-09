import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './header.scss';
import LogoRed from '../../assets/images/logo-red.svg';
import { FaBars } from 'react-icons/fa';
import SideMenu from '../side-menu/side-menu';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { Hidden } from '../../theme/global.style';
import { 
  HeaderSection, 
  HeaderContainer, 
  HeaderLogo, 
  HeaderLogoContainer, 
  HeaderMobileMenu, 
  HeaderMobileMenuButton, 
  HeaderDesktopMenu, 
  HeaderDesktopMenuItem, 
  HeaderDesktopMenuItems
} from './header.style';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [links] = useState([
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Uses',
      link: '/uses/',
    }
  ]);

  const trackGA = (cat: string, action: string, label: string, value: any) => trackCustomEvent({category: cat, action: action, label: label, value: value});
  const toggleMenu = (toggle: boolean) => {
    trackGA('Menu', 'Click', 'Mobile Menu', toggle);
    setToggle(toggle);
  };
  const trackLogoMenu = () => trackGA('Menu', 'Click', 'Logo', '');
  const trackMenuDesktopLinks = (link: string) => trackGA('Dekstop Menu - Links', 'Click', 'Dekstop Menu', link);
  const toggleBackDrop = (toggle: boolean) => {
    trackGA('Menu', 'Click', 'Mobile Menu Backdrop', toggle);
    setToggle(toggle);
  };

  useEffect(() => {
    const headerScrolling = () => {
      if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
        return setScrolling(true);
      } else {
        return setScrolling(false);
      }
    };

    const reSize = () => {
      if (document.documentElement.clientWidth > 768 || document.body.clientWidth > 768) {
        return setToggle(false);
      }
    };

    window.addEventListener('scroll', headerScrolling);
    window.addEventListener('resize', reSize);
    return () => {
      window.removeEventListener('scroll', headerScrolling);
      window.removeEventListener('resize', reSize);
    };
  }, []);

  return (
    <>
      <HeaderSection className={(scrolling ? 'is-active' : '')}>
        <Hidden>Header Section</Hidden>
        <HeaderContainer>
          <HeaderLogoContainer>
            <Link to="/" onClick={ () => trackLogoMenu }>
              <HeaderLogo src={LogoRed} alt="Randy Phalla's Logo" title="Randy Phalla's Logo" />
            </Link>
          </HeaderLogoContainer>
          <HeaderMobileMenu>
            <HeaderMobileMenuButton
              // isToggle={toggle}
              // className={(scrolling ? 'is-active' : '')}
              className={(scrolling ? 'is-active' : '') + (toggle ? ' is-toggle' : '')}
              onClick={() => toggleMenu(!toggle)}
              type="button"
              aria-label="Menu"
            >
              <FaBars />
            </HeaderMobileMenuButton>
          </HeaderMobileMenu>
          <HeaderDesktopMenu>
            <HeaderDesktopMenuItems>
              {links.map((link, i) => {
                return (
                  <HeaderDesktopMenuItem key={i}>
                    <Link
                      className="gatsby-link"
                      to={link.link}
                      onClick={() => trackMenuDesktopLinks(link.link)}
                    >
                      {link.name}
                    </Link>
                  </HeaderDesktopMenuItem>
                );
              })}
            </HeaderDesktopMenuItems>
          </HeaderDesktopMenu>
        </HeaderContainer>
      </HeaderSection>
      <SideMenu isToggle={toggle} onBackDropClick={() => toggleBackDrop(!toggle)} />
    </>
  );
};

export default Header;
