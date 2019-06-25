import React from "react";
import './banner.scss';
import { BannerContainer, BannerTitle, BannerDescription } from '../../theme/banner.style';

class Banner extends React.Component {
    render() {
        return (
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
