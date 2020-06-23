import React from 'react';
import {
  BannerSection,
  BannerContainer,
  BannerHelloThere,
  BannerTitle,
  BannerDescription,
} from './banner.style';
import { Hidden } from '../../theme/global.style';

const Banner = (props) => {
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

export default Banner;
