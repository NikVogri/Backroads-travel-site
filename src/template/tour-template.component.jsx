import React from "react"
import { graphql } from "gatsby"

const Tour = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour
  const [mainImage, ...tourImages] = images
  console.log(tourImages)
  return (
    <div>
      <h1>{data.tour.name}</h1>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      price
      name
      country
      days
      start(formatString: "dddd MMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          src
        }
      }
    }
  }
`
export default Tour
