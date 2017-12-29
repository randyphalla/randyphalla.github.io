import React, { Component } from 'react';
import SocialItemComponent from '../social-item/social-item.component';

import './footer.component.css';

class FooterComponent extends Component {
    
    socialItems;

    constructor(props) {
        super(props);

        this.socialItems = [
            {
                link: 'https://www.behance.net/randyphalla',
                myClass: 'fab fa-behance-square'
            },
            {
                link: 'https://github.com/randyphalla',
                myClass: 'fab fa-github'
            },
            {
                link: 'https://dribbble.com/randyphalla',
                myClass: 'fab fa-dribbble'
            },
            // {
            //     link: 'https://twitter.com/randyphalla',
            //     myClass: 'fab fa-twitter'
            // },
            {
                link: 'mailto:randyphalla@gmail.com',
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
                                        return <SocialItemComponent key={index} {...props} />
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
