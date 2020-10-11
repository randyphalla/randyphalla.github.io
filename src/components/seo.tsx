import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

type SeoProps = {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title?: string;
};

const SEO: FC<SeoProps> = (props: SeoProps) => {
  const { description, lang, meta, keywords, title } = props;
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description;
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:url`,
                content: `https://randyphalla.github.io/`,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:image`,
                content: `TODO: need add logo`,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                property: `twitter:url`,
                content: `https://randyphalla.github.io/`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                property: `twitter:image`,
                content: `TODO: need add logo`,
              },
              {
                name: `google-site-verification`,
                content: `UH8iq5Hr4Go8tC0DVlNsOPMYeRl9xZM6lrgCcF8BiH4`,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
