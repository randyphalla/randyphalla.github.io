import React, { Component } from 'react';
import './contact-page.css';

class ContactPage extends Component {
  render() {
    return (
        <section id="contact">
            <h2 className="hidden">Contact Section</h2>
            <div className="contact-info">
                <div className="container">
                    <h3>Let's Connect</h3>
                    <div className="under-line"></div>
                    <a href="#">randyphalla@gmail.com</a>
                </div>
            </div>
        </section>
    );
  }
}

export default ContactPage;
