import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getSeoData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        auth
        siteUrl
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getSeoData)
  const { siteDesc, siteTitle } = site.siteMetadata
  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "sl" }}>
      <meta name="description" content={description || siteDesc} />
    </Helmet>
  )
}

export default SEO
