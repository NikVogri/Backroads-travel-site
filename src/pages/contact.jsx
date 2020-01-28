import React from "react"
import Layout from "../components/Layout/Layout.component"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero/StyledHero.component"
export default ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.connectBcg.childImageSharp.fluid} />
      <div>this is contact page</div>
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
