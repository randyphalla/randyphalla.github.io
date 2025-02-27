export type PortfolioType = {
  id: number;
  imgSrc?: string;
  imgSrcAlt?: string;
  title: string;
  description?: string;
  images?: PortfolioImageType[];
  type?: string;
  repoURL?: string;
  siteURL?: string;
  languages?: string;
  client?: string;
  sites?: SiteType[];
  tools?: string;
  projectType?: 'Work' | 'School Project' | 'Side Project',
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
