import styled from 'styled-components';

const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;

  background-color: var(--white-color);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  .is-active {
    background-color: var(--white-color);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.05);
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  @media screen and (min-width: 768px) {
    padding: 0 16px;
  }
`;

const HeaderLogoContianer = styled.div`

`;

const HeaderLogo = styled.img`
  width: 37px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2, 1.2);
  }
`;

const HeaderMobileMenu = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const HeaderMobileMenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  border: 2px solid var(--black-color-1);
  border-radius: 25px;
  background-color: var(--black-color-1);
  transform: rotate(0);

  transition: all 0.3s;

  svg {
    fill: var(--white-color);
    width: 1.5em;
    height: 1.5em;
  }

  &:hover {
    border: 2px solid var(--black-color-1);
    background-color: var(--white-color);

    svg {
      fill: var(--black-color-1);
    }
  }

  .is-active {
    background-color: var(--white-color);
    border: 2px solid var(--black-color-1);
    transform: rotate(90deg);

    svg {
      fill: var(--black-color-1);
    }

    &:hover {
      border: 2px solid var(--black-color-1);
      background-color: var(--black-color-1);

      svg {
        fill: var(--white-color);
      }
    }
  }
`;

const HeaderDesktopMenu = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const HeaderDesktopMenuItems = styled.ul`
  display: flex;
  justify-content: flex-end;

  height: 85px;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;

  list-style: none;
`;

const HeaderDesktopMenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  margin-left: 10px;
  margin-right: 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }

  .is-active {
    &:hover {
      &::after {
        background-color: var(--black-color-1);
      }
    }
  }
`;

export {
  HeaderSection,
  HeaderContainer,
  HeaderLogoContianer,
  HeaderLogo,
  HeaderMobileMenu,
  HeaderMobileMenuButton,
  HeaderDesktopMenu,
  HeaderDesktopMenuItems,
  HeaderDesktopMenuItem
}
