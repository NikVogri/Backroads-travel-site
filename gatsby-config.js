/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.development`,
})

module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description:
      "Explore awesome tours, cheap & without any non-sense, you get for what you pay for! Unique experiences with professional guides. Forget your daily routine & say yes to your adventure",
    auth: "@Nick",
    siteUrl: "https://www.backroads-test.netlify.com",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.backroads-test.netlify.com",
        sitemap: "https://www.backroads-test.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken,
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-plugin-react-helmet`,
  ],
}
