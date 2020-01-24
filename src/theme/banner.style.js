import styled from "styled-components";

const BannerContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
    
    text-align: center;
    
    background-color: var(--red-color);
    transition: padding 0.3s ease;

    @media screen and (min-width: 576px) {
        position: relative;
        /* padding-top: 200px;
        padding-bottom: 350px; */
        padding-top: 115px;
        padding-bottom: 250px;
    }

    @media screen and (min-width: 768px) {
        .container {
            width: 650px;
        }
    }
`;

const BannerTitle = styled.h3 `
    margin: 0;
    padding-bottom: 10px;

    color: var(--white-color);
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;

    @media screen and (min-width: 576px) {
        font-size: 60px;
        line-height: 66px;
    }
`;

const BannerDescription = styled.p `
    margin: 0;
        
    color: var(--white-color);
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 24px;

    @media screen and (min-width: 576px) {
        font-size: 18px;
        line-height: 28px;
    }
`;

const BannerBottomBackground = styled.div`
    display: none;

    @media screen and (min-width: 576px) {
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        height: inherit;
        width: 100%;

        img {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 150px;
            width: 100%;
        }
    }

    @media screen and (min-width: 768px) {
        img {
            height: 200px;
        }
    }
`

export { 
    BannerContainer,
    BannerTitle,
    BannerDescription,
    BannerBottomBackground
};