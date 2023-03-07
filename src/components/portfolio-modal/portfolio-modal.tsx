import React from 'react';
import Modal from 'react-modal';
import './portfolio-modal.scss';
import {
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalType,
  ModalBody,
  ModalBodyBold,
  ModalLink,
  ModalImage,
  ModalButton
} from '../../theme/modal.style';

type PortfolioModalProps = {
  isOpen: boolean;
  onAfterOpen?: () => void;
  onRequestClose: () => void;
  customStyles?: any;
  contentLabel?: string;
  portfolio: any;
}

const PortfolioModal = (props: PortfolioModalProps) => {
  const { isOpen, onAfterOpen, onRequestClose, customStyles, contentLabel, portfolio } = props;

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel={contentLabel}
    >
      <ModalContainer>
        <ModalButton onClick={onRequestClose}>Close</ModalButton>
        <ModalImage src={portfolio.imgSrc} alt={portfolio.imgSrcAlt} />
        <ModalContent>
          <ModalTitle>{portfolio.title}</ModalTitle>
          <ModalType>{portfolio.type}</ModalType>
          <ModalBody>{portfolio.description}</ModalBody>
          <ModalBody>
            <ModalBodyBold>Languages:</ModalBodyBold> {portfolio.languages}
          </ModalBody>
          {portfolio.siteLink && (
            <ModalBody>
              <ModalBodyBold>Site:</ModalBodyBold> <ModalLink href={portfolio.siteLink} target="_blank" rel="noopener" aria-label="Open new tab">{portfolio.siteLink}</ModalLink>
            </ModalBody>
          )}
          {portfolio.repoLink && (
            <ModalBody>
              <ModalBodyBold>Repo:</ModalBodyBold> <ModalLink href={portfolio.repoLink} target="_blank" rel="noopener" aria-label="Open new tab">{portfolio.repoLink}</ModalLink>
            </ModalBody>
          )}
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}

export default PortfolioModal;