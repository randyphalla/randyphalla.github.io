import React, { FC } from 'react';
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

type BannerAltProps = {
  title?: string;
  description?: string;
  isResume?: string;
}

const BannerAlt: FC<BannerAltProps> = (props: BannerAltProps) => {
  return (
    <BannerAltWrapper>
      <Hidden>Banner Alt Section</Hidden>
      <BannerAltContainer>
        <BannerAltCont>
          <BannerAltTitle>{props.title}</BannerAltTitle>
          <BannerAltContLeftBorder>
            <BannerAltDescription>{props.description}</BannerAltDescription>
          </BannerAltContLeftBorder>
          {props.isResume && (
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
