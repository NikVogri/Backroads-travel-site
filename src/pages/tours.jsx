import React from "react"
import Layout from "../components/Layout/Layout.component"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero/StyledHero.component"
import Tours from "../components/Tours/Tours.component"
import SEO from "../components/SEO/SEO"
export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Tours" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <Tours />
    </Layout>
  )
}

export const getHeaderImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
