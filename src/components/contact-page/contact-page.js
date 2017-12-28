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
                    <div className="col-12 col-md-10 col-lg-8">
                        <h3>Let's Connect</h3>
                        <div className="under-line"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin maximus arcu, vitae imperdiet sapien. Nam scelerisque gravida massa, quis gravida purus dictum ac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin maximus arcu, vitae imperdiet sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin maximus arcu, vitae imperdiet sapien. Nam scelerisque gravida massa.</p>
                        <Link to="mailto:randyphalla@gmail.com" target="_blank">
                            randyphalla@gmail.com
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
