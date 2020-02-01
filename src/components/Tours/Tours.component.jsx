import React from "react"
import TourList from "../TourList/TourList.component"
import { graphql, useStaticQuery } from "gatsby"

const getAllTours = graphql`
  query {
    tours: allContentfulTour {
      edges {
        node {
          name
          slug
          price
          country
          contentful_id
          days
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

const Tours = () => {
  const { tours } = useStaticQuery(getAllTours)
  return <TourList tours={tours} />
}

export default Tours
