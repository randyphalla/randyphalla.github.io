import React from "react";
import { 
    BannerContainer, 
    BannerTitle, 
    BannerDescription, 
    BannerBottomBackground 
} from '../../theme/banner.style';
// import BannerBottomBackgroundImage from '../../assets/images/bottom-background.png';

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
                {/* <img src={BannerBottomBackgroundImage} alt="Banenr Bottom Background" /> */}
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1440 320">
                    <path 
                        fill="#fff" 
                        // fill-opacity="1" 
                        fillOpacity="1"
                        d="M0,160L34.3,154.7C68.6,149,137,139,206,160C274.3,181,343,235,411,245.3C480,256,549,224,617,202.7C685.7,181,754,171,823,170.7C891.4,171,960,181,1029,170.7C1097.1,160,1166,128,1234,138.7C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                    </path>
                </svg>
            </BannerBottomBackground>
        </BannerContainer>
    )    
}

export default Banner
