import React, { useState, useEffect} from "react"
import { Link } from "gatsby"

import './side-menu.scss';
import Logo from '../../assets/images/logo.svg';

const SideMenu = ({
    isToggle
}) => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        setLinks([
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Portfolio',
                link: '/portfolio'
            },
            {
                name: 'Uses',
                link: '/uses'
            },
            {
                name: 'Contact',
                link: '/contact'
            }
        ]);
        return () => {
            setLinks([]);
        }
    }, [])

    return (
        <section className={"side-menu " + (isToggle ? "side-menu--is-active" : "side-menu--is-not-active")}>
            <h2 className="hidden">Side Menu</h2>
        
            <div className="side-menu__logo">
                <img className="side-menu__logo-avatar" src={Logo} alt="Logo" />
            </div>

            <ul className="side-menu__lists">
                {
                    links.map((link, i) => {
                        return (
                            <li className="side-menu__lists__item" key={i}>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>

        </section>       
    )
}

export default SideMenu
