import React, { Component } from 'react';
import SocialListComponent from '../social-list/social-list.component.js';

class HomePage extends Component {
  render() {
    return (
        <section id="banner">
            <h2 className="hidden">Banner Section</h2>
            <div className="container">
                <h3>I am a Graphic Designer & Front End Developer based in London Ontario</h3>
            </div>
        </section>
        
    );
  }
}

export default HomePage;
