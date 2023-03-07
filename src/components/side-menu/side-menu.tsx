import React, { FC } from 'react';
import { Link } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { Hidden } from '../../theme/global.style';
import {
  SideMenuItem,
  SideMenuItems,
  SideMenuLogo,
  SideMenuLogoContainer,
  SideMenuSection,
  SideMenuBackdrop
} from './side-menu.style';
import Logo from '../../assets/images/logo.svg';

type SideMenuProps = {
  isToggle: boolean;
  onBackDropClick?: () => void;
}

const SideMenu: FC<SideMenuProps> = (props: SideMenuProps) => {
  const { isToggle, onBackDropClick } = props;
  const links = [
    {
      id: 0,
      name: 'Home',
      link: '/',
    },
    {
      id: 1,
      name: 'Uses',
      link: '/uses/',
    },
  ];
  const trackGA = (cat: string, action: string, label: string, value: number) => trackCustomEvent({category: cat, action: action, label: label, value: value});
  const trackMobileMenuLinks = (link: string, id: number) => trackGA('Mobile Menu - Links', 'Click', `${link}`, id);

  return (
    <>
      <SideMenuSection
       active={isToggle}
       style={{boxShadow: isToggle ? '0 0 10px 5px rgba(0, 0, 0, 0.1)' : ''}}
      >
        <Hidden>Side Menu</Hidden>
        <SideMenuLogoContainer>
          <SideMenuLogo src={Logo} alt="Randy Phalla's Logo" title="Randy Phalla's Logo" />
        </SideMenuLogoContainer>
        <SideMenuItems>
          {links.map((link, i) => {
            return (
              <SideMenuItem
                key={i}
                className={`${window.location.pathname === link.link ? 'active-link' : ' '}`}
              >
                <Link
                  to={link.link}
                  onClick={() => trackMobileMenuLinks(link.link, link.id)}
                >
                  {link.name}
                </Link>
              </SideMenuItem>
            );
          })}
        </SideMenuItems>
      </SideMenuSection>
      <SideMenuBackdrop
        onClick={onBackDropClick}
        style={{
          left: isToggle ? '0px' : '-100vw',
          opacity: isToggle ? 1 : 0
        }}
      ></SideMenuBackdrop>
    </>
  );
};

export default SideMenu;
