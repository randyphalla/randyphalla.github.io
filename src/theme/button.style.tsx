import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 20px;

  color: var(--black-color-1);
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 30px;
  text-transform: uppercase;

  background-color: var(--white-color);
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);

  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    border: 2px solid var(--black-color-1);
  }

  &.default-btn--white {
    color: var(--white-color);
    background-color: transparent;
    border: 2px solid var(--white-color);

    &:hover {
      color: var(--red-color);
      background-color: var(--white-color);
      border: 2px solid var(--white-color);
    }
  }

  .primary-button,
  .secondary-button,
  .text-button {
    &:hover {
      border: 2px solid var(--red-color);
    }
  }

  &.primary-button {
    color: var(--white-color);
    background-color: var(--red-color);

    &:hover {
      color: var(--red-color);
      background-color: var(--white-color);
    }
  }

  &.secondary-button {
    color: var(--red-color);
    background-color: var(--white-color);

    &:hover {
      color: var(--white-color);
      background-color: var(--red-color);
    }
  }

  &.text-button {
    color: var(--red-color);
    background-color: var(--transparent);

    &:hover {
      /* color: var(--red-color); */
      /* background-color: var(--white-color); */
    }
  }
`;
