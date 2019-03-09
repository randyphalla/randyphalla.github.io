import React from "react";
import './banner.scss';

class Banner extends React.Component {
    render() {
        return (
            <section className="banner">
            <h2 className="hidden">Banner Section</h2>
                <div className="container">
                    <h3 className="banner-title">Randy Phalla</h3>
                    <h3 className="banner-body">I am a web developer and designer that specialize in front end development and user interface design.</h3>
                </div>
            </section>
        )
    }
}

export default Banner
