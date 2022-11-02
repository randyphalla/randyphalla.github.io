export type PortfolioType = {
  id: number;
  imgSrc?: string;
  imgSrcAlt?: string;
  title: string;
  description?: string;
  images?: PortfolioImageType[];
  type?: string;
  repoLink?: string;
  siteLink?: string;
  languages?: string;
};

export type PortfolioImageType = {
  id: number;
  imgSrc?: string;
  imgSrcAlt?: string;
  title: string;
};
