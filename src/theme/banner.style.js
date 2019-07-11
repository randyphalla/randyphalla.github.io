import styled from "styled-components";

const BannerContainer = styled.div `
    height: 585px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: var(--red-color);
`;

const BannerTitle = styled.h3 `
    margin: 0;
    padding-bottom: 10px;

    color: var(--white-color);
    font-size: 60px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 66px;
`;

const BannerDescription = styled.p `
    margin: 0;
        
    color: var(--white-color);
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    letter-spacing: 0.5px;
    line-height: 24px;
`;

export { 
    BannerContainer,
    BannerTitle,
    BannerDescription
};