import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.${process.env.NODE_ENV}",
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: "distantuchet",
    siteUrl: "https://distantuchet.netlify.app/",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-sitemap",
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
