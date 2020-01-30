import React from "react";
import { 
    Hidden,
    BannerSection, 
    BannerContainer,
    BannerHelloThere,
    BannerTitle, 
    BannerDescription
} from './banner.style';

const Banner = () => {
    return (
        <BannerSection>
            <Hidden>Banner Section</Hidden>
            <BannerContainer>            
                <BannerHelloThere>Hello there, I'm</BannerHelloThere>
                <BannerTitle>Randy Phalla</BannerTitle> 
                <BannerDescription>I am a front end web developer and designer that specialize in front end development and user interface design.</BannerDescription>         
            </BannerContainer>
        </BannerSection>
    )    
};

export default Banner;
