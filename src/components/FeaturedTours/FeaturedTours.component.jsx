import React from "react"
import Tour from "../Tour/Tour.component"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../Title/Title.component"
import styles from "./items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          slug
          price
          country
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const response = useStaticQuery(getFeaturedTours)
  const tours = response.featuredTours.edges
  return (
    <div className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        View all tours
      </AniLink>
    </div>
  )
}

export default FeaturedTours
