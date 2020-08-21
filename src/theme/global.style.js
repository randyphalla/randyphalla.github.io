import styled from 'styled-components';

export const Hidden = styled.h2`
  display: none;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  /* TODO: Add this to Header */
  .header-container {
    display: flex;
		justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  @media screen and (min-width: 768px) {
    width: 85%;

    .header-container {
      padding: 0 16px;
    }

    /* TODO: Add this to Portfolio Details */
    .portfolio-details-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: 992px) {
    width: 75%;
  }

  @media screen and (min-width: 1200px) {
    width: 70%;
  }
`;
