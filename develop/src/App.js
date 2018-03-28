import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

import './assets/css/bootstrap.min.css';
import './assets/css/font.css';
import './App.css';

// import HeaderComponent from './components/header/header.component';
// import FooterComponent from './components/footer/footer.component';
// import HomePage from './components/home-page/home-page';
// import AboutPage from './components/about-page/about-page';
// import ContactPage from './components/contact-page/contact-page';
// import PortfolioPage from './components/portfolio-page/portfolio-page';
import ComingSoonPage from './components/coming-soon/coming-soon-page';

class App extends Component {
    render() {
        return (
            <div className="main-content">
                {/* <HeaderComponent />
                    <Route exact={true} path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/portfolio" component={PortfolioPage} />
                    <Route path="/contact" component={ContactPage} />
                <FooterComponent /> */}
                <ComingSoonPage />
            </div>
        );
    }
}

export default App;

