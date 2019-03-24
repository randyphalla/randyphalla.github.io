import React from "react";
import './banner.scss';

class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="banner">
            <h2 className="hidden">Banner Section</h2>
                <div className="container">
                    <h3 className="banner-title">
                        {this.props.title}
                    </h3>
                    <h3 className="banner-body">
                        {this.props.description}
                    </h3>
                </div>
            </section>
        )
    }
}

export default Banner
