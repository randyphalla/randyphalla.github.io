import React, { useState } from 'react';
import SocialItemComponent from '../../components/social-item/social-item.component';
import ReactGA from 'react-ga';

import './coming-soon-page.css';
import logo from '../../images/logo.png';

function ComingSoonPage() {

    const socialItems = [
        {
            link: 'https://www.linkedin.com/in/randyphalla/',
            myClass: 'fab fa-linkedin-in',
            name: 'linkedin',
        },
        {
            link: 'https://github.com/randyphalla',
            myClass: 'fab fa-github',
            name: 'github',
        },
        {
            link: 'https://www.behance.net/randyphalla',
            myClass: 'fab fa-behance-square',
            name: 'behance',
        },
        {
            link: 'https://dribbble.com/randyphalla',
            myClass: 'fab fa-dribbble',
            name: 'dribbble',
        },
        {
            link: 'mailto:randyphalla@gmail.com',
            myClass: 'fas fa-at',
            name: 'mail',
        },
    ];

    const [socials, setSocials] = useState(socialItems);

    ReactGA.initialize('UA-111702075-1');
    ReactGA.pageview(window.location.pathname);

    function googleTrack(name) {
        ReactGA.outboundLink({
            label: name
        }, () => {
        });
    };

    return (
        <section id="coming-soon">
            <h2 className="hidden">Coming Soon</h2>

            <div className="container">
                <div className="row logo">
                    <div className="col-12">
                        <img src={logo} alt="Randy Phalla's Logo" />
                        <h3>Hello I'm <br /> <span>Randy Phalla</span></h3>
                    </div>
                </div>

                <div className="row justify-content-center description">
                    <div className="col-12 col-sm-10 col-md-8">
                        <p><span>Front-End Web Developer</span> & <span>Graphic Designer</span> from <span>London, Ontario.</span></p>
                        <p>Currently working at <a href="https://devlift.io" rel="noopener noreferrer" target="_blank" onClick={() => googleTrack('https://devlift.io')}>Devlift Media</a> as a <span>Web Developer.</span></p>
                    </div>
                </div>

                <div className="row coming-soon-message">
                    <div className="col-12">
                        <h3>Website work in progress <br /> ( Coming Soon )</h3>
                    </div>
                </div>

                <div className="row social-media-links">
                    <div className="col-12">
                        <ul>
                            {socials.map((props, index) => {
                                return <SocialItemComponent key={index} {...props} googleTrack={() => googleTrack(props.name)} />;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default ComingSoonPage;
