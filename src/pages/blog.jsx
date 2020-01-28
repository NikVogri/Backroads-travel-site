import React from "react"
import Layout from "../components/Layout/Layout.component"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero/StyledHero.component"
export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export const getHeaderImage = graphql`
  query {
    blogBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
