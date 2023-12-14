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
  client?: string;
  sites?: SiteType[];
};

export type PortfolioImageType = {
  id: number;
  imgSrc?: string;
  imgSrcAlt?: string;
  title: string;
};

export type SiteType = {
  id: number;
  name: string;
  link: string;
};
