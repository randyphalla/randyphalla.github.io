import styled from 'styled-components';

export const SideMenuSection = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.active ? 0 : -220 }px;
  z-index: 3;

  width: 220px;
  height: 100%;

  background-color: var(--black-color-1);
  /* box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1); */

  transition: all 0.3s;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SideMenuLogoContainer = styled.div`
  display: flex;
  padding: 16px;
  margin-left: 16px;
`;

export const SideMenuLogo = styled.img`
  width: 37px;
`;

export const SideMenuItems = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none;
`;

export const SideMenuItem = styled.li`
  position: relative;
  transition: all 0.3s;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';

    height: 100%;
    width: 5px;

    background-color: var(--white-color);
    opacity: 0;
  }

  &.active-link,
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);

    a { color: var(--white-color); }

    &::after { opacity: 1; }
  }

  a {
    display: block;
    padding: 16px 32px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: var(--white-color);
    font-size: 14px;
    text-decoration: none;
  }
`;

export const SideMenuBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
 
  height: 100vh;
  width: 100vw;
  
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;