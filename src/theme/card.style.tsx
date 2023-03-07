import styled from 'styled-components';

export const Cards = styled.div`
  display: grid;
  gap: 16px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Card = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const CardAvatar = styled.img`
  height: auto;
  width: 100%;

  // background-color: var(--light-grey-color);
  border-radius: 8px;
  transition: all 0.3s linear;

  &:hover {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.10);
  }
`;

export const CardTitle = styled.h4`
  margin: 0;
  padding-top: 15px;
  padding-bottom: 10px;

  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const CardDescription = styled.p`
  margin: 0;

  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
`;
