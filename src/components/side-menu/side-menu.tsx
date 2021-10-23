import React, { FC, useState, useEffect } from 'react';
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
  const [links, setLinks] = useState([]);
  const trackGA = (cat: string, action: string, label: string, value: any) => trackCustomEvent({category: cat, action: action, label: label, value: value});
  const trackMobileMenuLinks = (link: string) => trackGA('Mobile Menu - Links', 'Click', 'Mobile Menu', link);

  useEffect(() => {
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
    return () => {
      setLinks([]);
    };
  }, []);

  return (
    <>
      <SideMenuSection
       active={props.isToggle} 
       style={{boxShadow: props.isToggle ? '0 0 10px 5px rgba(0, 0, 0, 0.1)' : ''}}
      >
        <Hidden>Side Menu</Hidden>
        <SideMenuLogoContainer>
          <SideMenuLogo src={Logo} alt="Randy Phalla's Logo" title="Randy Phalla's Logo" />
        </SideMenuLogoContainer>
        <SideMenuItems>
          {links.map((link, i) => {
            return (
              <SideMenuItem key={i}>
                <Link
                  to={link.link}
                  onClick={() => trackMobileMenuLinks(link)}
                >
                  {link.name}
                </Link>
              </SideMenuItem>
            );
          })}
        </SideMenuItems>
      </SideMenuSection>
      <SideMenuBackdrop 
        onClick={props.onBackDropClick}
        style={{
          left: props.isToggle ? '0px' : '-100vw',
          opacity: props.isToggle ? 1 : 0
        }}
      ></SideMenuBackdrop>
    </>
  );
};

export default SideMenu;
