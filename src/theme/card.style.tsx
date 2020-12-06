import styled from 'styled-components';

export const ProjectsItem = styled.div`
  padding: 16px;
  width: 100%;

  @media (min-width: 768px) {
    width: calc((100% / 2) - 32px);
  }

  @media (min-width: 992px) {
    width: calc((100% / 3) - 32px);
  }

  @media (min-width: 1600px) {
    width: calc((100% / 4) - 32px);
  }
`;

export const ProjectsItemAvatar = styled.div`
  height: 280px;
  width: 100%;

  background-color: var(--light-grey-color);
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const ProjectsItemTitle = styled.h4`
  margin: 0;
  padding-top: 30px;
  padding-bottom: 10px;

  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`;

export const ProjectsItemDescription = styled.p`
  margin: 0;

  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
`;
