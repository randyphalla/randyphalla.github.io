import React from 'react';
import {
  BannerAltWrapper,
  BannerAltContainer,
  BannerAltCont,
  BannerAltTitle,
  BannerAltDescription,
  BannerAltContLeftBorder,
} from './banner-alt.style';
import { Hidden } from '../../theme/global.style';
import { Button } from '../../theme/button.style';

const BannerAlt = ({ title, description, isResume }) => {
  return (
    <BannerAltWrapper>
      <Hidden>Banner Alt Section</Hidden>
      <BannerAltContainer>
        <BannerAltCont>
          <BannerAltTitle>{title}</BannerAltTitle>
          <BannerAltContLeftBorder>
            <BannerAltDescription>{description}</BannerAltDescription>
          </BannerAltContLeftBorder>
          {isResume && (
            <a
              href="../assets/files/Randy Phalla's Resume.pdf"
              download
              aria-label="Download my resume"
              title="Download my resume"
            >
              <Button
                className="default-btn--white"
                aria-label="Resume"
                type="button"
              >
                Resume
              </Button>
            </a>
          )}
        </BannerAltCont>
      </BannerAltContainer>
    </BannerAltWrapper>
  );
};

export default BannerAlt;
