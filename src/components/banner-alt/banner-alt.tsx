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

type BannerAltProps = {
  title: string;
  description?: string;
}

const BannerAlt: FC<BannerAltProps> = (props: BannerAltProps) => {
  const { title, description } = props;

  return (
    <BannerAltWrapper>
      <Hidden>Banner Alt Section</Hidden>
      <BannerAltContainer>
        <BannerAltCont>
          <BannerAltTitle>{title}</BannerAltTitle>
          {description && (
            <BannerAltContLeftBorder>
              <BannerAltDescription>{description}</BannerAltDescription>
            </BannerAltContLeftBorder>
          )}
        </BannerAltCont>
      </BannerAltContainer>
    </BannerAltWrapper>
  );
};

BannerAlt.defaultProps = {
  title: 'Banner Alt Title'
};

export default BannerAlt;
