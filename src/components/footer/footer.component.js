import React, { Component } from 'react';
import SocialItemComponent from '../social-item/social-item.component';

import './footer.component.css';

class FooterComponent extends Component {
    
    socialItems;

    constructor(props) {
        super(props);

        this.socialItems = [
            {
                link: 'https://www.behance.net/',
                myClass: 'fab fa-behance-square'
            },
            {
                link: 'https://www.behance.net/',
                myClass: 'fab fa-github'
            },
            {
                link: 'https://www.behance.net/',
                myClass: 'fab fa-dribbble'
            },
            {
                link: 'https://www.behance.net/',
                myClass: 'fab fa-twitter'
            },
            {
                link: 'https://www.behance.net/',
                myClass: 'fas fa-at'
            }
        ];

    }

    render() {
        return (
            <footer id="footer">
                <h2 className="hidden">Footer</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 social-links">
                            <ul>
                                {
                                    this.socialItems.map((props, index) => {
                                        return (
                                            <li>
                                                <SocialItemComponent 
                                                    key={index} 
                                                    {...props} 
                                                />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-xs-12 col-md-6 copyright">
                            <p>Randy Phalla Design &copy; 2017</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterComponent;
