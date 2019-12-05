import styled from "styled-components";

export const BannerAltWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    margin-bottom: 60px;
    background-color: var(--red-color);
`;

export const BannerAltCont = styled.div`
    .default-btn { margin-top: 10px; }

    @media screen and (min-width: 768px) {
        .default-btn { margin-left: 0; }
    }
`;

export const BannerAltTitle = styled.h3`
    margin: 0;
    padding-bottom: 10px;

    color: var(--white-color);
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`;

export const BannerAltDescription = styled.p`
    margin-top: 10px;
    margin-left: 16px;
    margin-bottom: 10px;

    color: var(--white-color);
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    line-height: 24px;
`;

export const BannerAltContLeftBorder = styled.div`
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        margin-left: 0;
        height: 100%;
        width: 3px;
        background-color: var(--white-color);
    }
`;