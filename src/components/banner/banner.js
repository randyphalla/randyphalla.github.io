import React from "react";
import { BannerContainer, BannerTitle, BannerDescription, BannerBottomBackground } from '../../theme/banner.style';
import BannerBottomBackgroundImage from '../../assets/images/bottom-background.png';
const Banner = ({
    title,
    description,
}) => {
    return (
        <BannerContainer>
            <h2 className="hidden">Banner Section</h2>
            <div className="container">            
                <BannerTitle>{title}</BannerTitle>
                <BannerDescription>{description}</BannerDescription>                  
            </div>
            <BannerBottomBackground>
                <img src={BannerBottomBackgroundImage} alt="Banenr Bottom Background" />
            </BannerBottomBackground>
        </BannerContainer>
    )    
}

export default Banner
