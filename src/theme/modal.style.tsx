import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: #fff;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    // justify-content: flex-start;
    // align-items: flex-start;
    flex-direction: row;
  }
`;

export const ModalContent = styled.div`
  padding: 16px;
  word-break: break-word;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    // padding-top: 20px;
    // padding-left: 32px;
    // padding-right: 20px;
    // padding-bottom: 20px;
    padding: 32px;
  }
`;

export const ModalTitle = styled.h4`
  font-size: 20px;
  font-family: 'Montserrat',sans-serif;
  font-weight: 700;
`;

export const ModalType = styled.h3`
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: 14px;
  font-family: 'Montserrat',sans-serif;
  font-weight: 500;
`;

export const ModalBody = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-family: 'Raleway',sans-serif;
  font-weight: 400;
  line-height: 20px;
`;

export const ModalBodyBold = styled.span`
  font-family: 'Montserrat',sans-serif;
  font-weight: 500;
`;


export const ModalLink = styled.a`
  color: var(--black-color-1);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const ModalButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  height: 50px;
  width: 50px;

  color: #fff;

  background-color: #000;
  border-radius: 50%;
  border: 1px solid #000;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #fff;
  }
`;
