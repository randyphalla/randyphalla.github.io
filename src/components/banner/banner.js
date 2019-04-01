import React from "react";
import './banner.scss';
import styled from "styled-components";

const BannerContainer = styled.div `
    height: 585px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #FF001F;
`

const BannerTitle = styled.h3 `
    margin: 0;
    padding-bottom: 10px;

    color: #ffffff;
    font-size: 60px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`

const BannerDescription = styled.h4 `
    margin: 0;
        
    color: #ffffff;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 30px;
`

class Banner extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            // <section className="banner">
            // <h2 className="hidden">Banner Section</h2>
            //     <div className="container">
            //         <h3 className="banner-title">
            //             {this.props.title}
            //         </h3>
            //         <h4 className="banner-body">
            //             {this.props.description}
            //         </h4>
            //     </div>
            // </section>
            <BannerContainer>
                <h2 className="hidden">Banner Section</h2>
                <div className="container">
                    <BannerTitle>{this.props.title}</BannerTitle>
                    <BannerDescription>{this.props.description}</BannerDescription>
                </div>
            </BannerContainer>
        )
    }
}

export default Banner
