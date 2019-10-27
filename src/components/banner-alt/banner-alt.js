import React from "react";
import { 
    BannerAltWrapper, 
    BannerAltCont,
    BannerAltTitle,
    BannerAltDescription,
    BannerAltContLeftBorder
} from './banner-alt.style';

const BannerAlt = ({
    title,
    description,
    isResume
}) => {
    return (
        <BannerAltWrapper>
            <h2 className="hidden">Banner Alt Section</h2>
            <div className="container">
                <BannerAltCont>
                    <BannerAltTitle>{title}</BannerAltTitle>
                    <BannerAltContLeftBorder>
                        <BannerAltDescription>{description}</BannerAltDescription>
                    </BannerAltContLeftBorder>
                    {   
                        isResume &&
                        <a href="../assets/files/Randy Phalla's Resume.pdf" download aria-label="Download my resume">
                            <button 
                                className="default-btn default-btn--white" 
                                aria-label="Resume" 
                                type="button">
                                Resume
                            </button>                  
                        </a>
                    }
                </BannerAltCont>
            </div>
        </BannerAltWrapper>
    )    
}

export default BannerAlt
