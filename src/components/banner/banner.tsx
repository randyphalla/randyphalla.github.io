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
  const { helloThere, name, description } = props;

  return (
    <BannerSection>
      <Hidden>Banner Section</Hidden>
      <BannerContainer>
        <BannerHelloThere>{helloThere}</BannerHelloThere>
        <BannerTitle>{name}</BannerTitle>
        <BannerDescription>{description}</BannerDescription>
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
