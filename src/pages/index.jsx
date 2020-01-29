import React from "react"
import { Link, graphql } from "gatsby"
import StyledHero from "../components/StyledHero/StyledHero.component"
import Layout from "../components/Layout/Layout.component"
import Banner from "../components/Banner/Banner.component"
import Services from "../components/services/Services.component"
import About from "../components/About/About.component"
import FeaturedTours from "../components/FeaturedTours/FeaturedTours.component"
export default ({ data }) => {
  return (
    <Layout>
      <StyledHero home img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, architecto?"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
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
