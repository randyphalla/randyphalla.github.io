import styled from 'styled-components';

export const BannerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 120px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-bottom: 60px;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  width: 80%;

  @media screen and (min-width: 768px) {
    width: 85%;
    margin-left: 16px;
  }

  @media screen and (min-width: 992px) {
    width: 75%;
  }

  @media screen and (min-width: 1200px) {
    width: 70%;
  }
`;

export const BannerHelloThere = styled.h3`
  margin: 0;

  color: var(--black-color-1);
  font-size: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  text-transform: uppercase;

  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`;

export const BannerTitle = styled.h3`
  margin: 0;
  padding-bottom: 5px;

  color: var(--black-color-1);
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  @media screen and (min-width: 576px) {
    font-size: 60px;
  }
`;

export const BannerDescription = styled.p`
  margin: 0;

  color: #3C3D41;
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 30px;
  text-align: left;

  @media screen and (min-width: 576px) {
    font-size: 26px;
    line-height: 1.3;
  }
`;
