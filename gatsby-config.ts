import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: "ДистантУчёт - аутсорсинг ЖКХ и бухгалтерии",
    description: `ДистантУчёт - аутсорсинг расчета ЖКУ и ведения бухгалтерии`,
    siteUrl: process.env.URL,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // "gatsby-plugin-google-gtag",
    `gatsby-plugin-git-lastmod`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allSitePage {
          nodes {
            path
            pageContext
          }
        }
      }`,
        //@ts-ignore plugin tupings
        serialize: ({ path, pageContext }) => ({
          url: path,
          lastmod: pageContext?.lastMod,
        }),
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Distantuchet contact form",
        short_name: "Distantuchet",
        start_url: "/",
        background_color: "#86BDBF",
        theme_color: "#3E9599",
        display: "standalone",
        icon: "src/images/logo.svg",
      },
    },
    "gatsby-plugin-offline",
  ],
};

export default config;
