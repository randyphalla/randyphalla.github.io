import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './contact-page.css';

class ContactPage extends Component {
  render() {
    return (
        <section id="contact">
            <h2 className="hidden">Contact Section</h2>
            <div className="contact-info">
                <div className="container">
                    <div className="row justify-content-md-center justify-content-lg-center">
                        <div className="col-12 col-md-10 col-lg-12">
                            <h3>Interested in connecting</h3>
                            <div className="under-line"></div>
                            <p>Whenever you wanna connect, collaborate or hire me.</p>
                            <Link to="mailto:randyphalla@gmail.com" target="_blank" rel="noopener">
                                Send me an email
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default ContactPage;
