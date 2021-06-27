import styled from 'styled-components';

export const Hidden = styled.h2`
  display: none;
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    /* TODO: Add this to Portfolio Details */
    .portfolio-details-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;
