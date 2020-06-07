import React from 'react';
import {
  BannerSection,
  BannerContainer,
  BannerHelloThere,
  BannerTitle,
  BannerDescription,
} from './banner.style';
import { Hidden } from '../../theme/global.style';

const Banner = ({helloThere, name, description}) => {
  return (
    <BannerSection>
      <Hidden>Banner Section</Hidden>
      <BannerContainer>
        <BannerHelloThere>{ helloThere }</BannerHelloThere>
        <BannerTitle>{ name }</BannerTitle>
        <BannerDescription>{ description }</BannerDescription>
      </BannerContainer>
    </BannerSection>
  );
};

export default Banner;
