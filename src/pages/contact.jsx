import React from "react"
import Layout from "../components/Layout/Layout.component"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero/StyledHero.component"
import Contact from "../components/Contact/Contact.component"
export default ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
      <Contact />
    </Layout>
  )
}

export const getHeaderImage = graphql`
  query {
    connectBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
