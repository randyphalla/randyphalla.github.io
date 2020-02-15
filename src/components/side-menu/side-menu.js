import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './side-menu.scss';
import Logo from '../../assets/images/logo.svg';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const SideMenu = ({ isToggle }) => {
	const [links, setLinks] = useState([]);

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

  function trackGA(cat, action , label, value) {
    trackCustomEvent({
      category: cat,
      action: action,
      label: label,
      value: value
    })
  }

  function trackMobileMenuLinks(link) {
    trackGA('Mobile Menu - Links', 'Click', 'Mobile Menu', link);
  }

	return (
		<section className={'side-menu ' + (isToggle ? 'side-menu--is-active' : 'side-menu--is-not-active')}>
			<h2 className="hidden">Side Menu</h2>

			<div className="side-menu__logo">
				<img className="side-menu__logo-avatar" src={Logo} alt="Logo" />
			</div>

			<ul className="side-menu__lists">
				{links.map((link, i) => {
					return (
						<li className="side-menu__lists__item" key={i}>
							<Link to={link.link} onClick={trackMobileMenuLinks(link)}>{link.name}</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default SideMenu;
