import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query First {
    site {
      siteMetadata {
        auth
        description
        title
        data {
          name
          age
          country
        }
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>title: {siteMetadata.title}</h1>
      <h1>author:</h1>
    </div>
  )
}

export default Header
