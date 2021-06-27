import styled from 'styled-components';

export const BannerAltWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 0;
  margin-bottom: 80px;

  background-color: var(--white-color);
  border-bottom: 1px solid var(--black-color-1);
`;

export const BannerAltContainer = styled.div`
`;

export const BannerAltCont = styled.div`
  .default-btn {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    .default-btn {
      margin-left: 0;
    }
  }
`;

export const BannerAltTitle = styled.h3`
  margin: 0;
  padding-bottom: 10px;

  color: var(--black-color-1);
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

export const BannerAltDescription = styled.p`
  margin-top: 10px;
  margin-left: 16px;
  margin-bottom: 10px;

  color: var(--black-color-1);
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
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
    background-color: var(--black-color-1);
  }
`;
