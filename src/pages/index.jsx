import React from "react"
import { Link, graphql } from "gatsby"
import StyledHero from "../components/StyledHero/StyledHero.component"
import Layout from "../components/Layout/Layout.component"
import Banner from "../components/Banner/Banner.component"
import Services from "../components/Services/Services.component"
import About from "../components/About/About.component"
import FeaturedTours from "../components/FeaturedTours/FeaturedTours.component"
import SEO from "../components/SEO/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="BackRoads is a blog and travel website where you can find amazing and 
        cheap travel ideas with blogs to inform you all about them!"
      />
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
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
