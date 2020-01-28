import React from "react"
import { graphql, StaticQuery } from "gatsby"
const getData = graphql`
  {
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

const RegularHeader = () => {
  return (
    <div>
      <StaticQuery
        query={getData}
        render={data => {
          return <h1>hello {data.site.siteMetadata.title}</h1>
        }}
      />
      <h1>hello, world</h1>
    </div>
  )
}

export default RegularHeader
