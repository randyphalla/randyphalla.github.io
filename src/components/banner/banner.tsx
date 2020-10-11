import React, { FC } from 'react';
import {
  BannerSection,
  BannerContainer,
  BannerHelloThere,
  BannerTitle,
  BannerDescription,
} from './banner.style';
import { Hidden } from '../../theme/global.style';

type BannerProps = {
  helloThere?: string;
  name?: string;
  description?: string;
}

const Banner: FC<BannerProps> = (props: BannerProps) => {
  return (
    <BannerSection>
      <Hidden>Banner Section</Hidden>
      <BannerContainer>
        <BannerHelloThere>{ props.helloThere }</BannerHelloThere>
        <BannerTitle>{ props.name }</BannerTitle>
        <BannerDescription>{ props.description }</BannerDescription>
      </BannerContainer>
    </BannerSection>
  );
};

Banner.defaultProps = {
  helloThere: 'Banner hello three',
  name: 'Banner name',
  description: 'Banner description'
};

export default Banner;
