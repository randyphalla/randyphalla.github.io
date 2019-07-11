import styled from "styled-components";

const ProjectsItem = styled.div `
    padding-top: 16px;
    padding-bottom: 16px;
    width: 100%;

    @media (min-width: 768px) {
        width: calc((100% / 2) - 16px);
    }

    @media (min-width: 992px) {
        width: calc((100% / 3) - 16px);
    }
`;

const ProjectsItemAvatar = styled.img `
    height: 280px;
    width: 100%;
    background-color: #D8D8D8;
    border-radius: 8px;
`;

const ProjectsItemTitle = styled.h4 `
    margin: 0;
    padding-top: 30px;
    padding-bottom: 10px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
`;

const ProjectsItemDescription = styled.p `
    margin: 0;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
`;

export { 
    ProjectsItem, 
    ProjectsItemAvatar, 
    ProjectsItemTitle,
    ProjectsItemDescription 
};