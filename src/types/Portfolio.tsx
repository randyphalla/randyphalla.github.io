export type PortfolioType = {
  id: number;
  imgSrc?: string;
  imgSrcAlt?: string;
  title: string;
  description?: string;
  images?: PortfolioImageType[];
};

export type PortfolioImageType = {
  id: number;
  imgSrc?: string;
  imgSrcAlt?: string;
  title: string;
};
