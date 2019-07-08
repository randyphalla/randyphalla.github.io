import React from "react";
import './banner.scss';
import { BannerContainer, BannerTitle, BannerDescription } from '../../theme/banner.style';

const Banner = ({
    title,
    description
}) => {
    return (
        <BannerContainer>
            <h2 className="hidden">Banner Section</h2>
            <div className="container">
                <BannerTitle>{title}</BannerTitle>
                <BannerDescription>{description}</BannerDescription>
            </div>
        </BannerContainer>
    )    
}

export default Banner
