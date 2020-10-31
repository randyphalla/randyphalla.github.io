import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './header.scss';
import Logo from '../../assets/images/logo.svg';
import LogoRed from '../../assets/images/logo-red.svg';
import { FaBars } from 'react-icons/fa';
import SideMenu from '../side-menu/side-menu';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { Hidden } from '../../theme/global.style';

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [links, setLinks] = useState([]);
  // const [theme, setTheme] = useState('light');

  const trackGA = (cat, action, label, value) => trackCustomEvent({category: cat, action: action, label: label, value: value});
  const toggleMenu = (toggle: boolean) => {
    trackGA('Menu', 'Click', 'Mobile Menu', toggle);
    setToggle(toggle);
  }
  const trackLogoMenu = () => trackGA('Menu', 'Click', 'Logo', '');
  const trackMenuDesktopLinks = (link: string) => trackGA('Dekstop Menu - Links', 'Click', 'Dekstop Menu', link);

  // const changeTheme = (mode) => {
  //   setTheme(mode);
  //   // window.localStorage.setItem('theme', mode);
  //   // const myTheme = window.localStorage.getItem('theme');
  // };
  // const LightModeButton = (props) => {
  //   return (
  //     <button
  //       className="theme-button theme-button--light"
  //       onClick={props.onClick}
  //     >Light Mode</button>
  //   )
  // };
  // const DarkModeButton = (props) => {
  //   return (
  //     <button
  //       className="theme-button theme-button--dark"
  //       onClick={props.onClick}
  //     >Dark Mode</button>
  //   )
  // };

  // let modeButton;
  // if (theme === 'light') {
  //   modeButton = <DarkModeButton onClick={ () => changeTheme('dark') }/>
  // } else {
  //   modeButton = <LightModeButton onClick={ () => changeTheme('light') } />
  // }

  useEffect(() => {
    const headerScrolling = () => {
      if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
        return setScrolling(true);
      } else {
        return setScrolling(false);
      }
    };

    setLinks([
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Uses',
        link: '/uses',
      },
    ]);

    window.addEventListener('scroll', headerScrolling);

    return () => {
      window.removeEventListener('scroll', headerScrolling);
      setLinks([]);
    };
  }, []);

  return (
    <div>
      <header className={'header ' + (scrolling ? 'header--is-active' : 'header--is-not-active')}>
        <Hidden>Header Section</Hidden>

        <div className="container">
          <div className="logo">
            <Link to="/" onClick={ () => trackLogoMenu }>
              <img className="logo__avatar" src={scrolling ? LogoRed : Logo} alt="Logo" />
            </Link>
          </div>

          <div className="mobile-menu">
            <button
              className={
                'mobile-menu__button ' +
                (toggle ? 'mobile-menu__button--is-active' : 'mobile-menu__button--is-not-active')
              }
              onClick={ () => toggleMenu(!toggle)}
              aria-label="Burger Menu"
            >
              <FaBars />
            </button>
          </div>

          <div className="desktop-menu">
            <ul className="desktop-menu-links">
              {links.map((link, i) => {
                return (
                  <li className="desktop-menu-links__item" key={i}>
                    <Link
                      className="desktop-menu-links__item-link"
                      activeClassName="desktop-menu-links__item-link--current-page"
                      to={link.link}
                      onClick={ () => trackMenuDesktopLinks(link) }
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              {/* <li className="desktop-menu-links__item">
               { modeButton }
              </li> */}
            </ul>
          </div>
        </div>
      </header>

      <SideMenu isToggle={toggle} />
    </div>
  );
};

export default Header;
