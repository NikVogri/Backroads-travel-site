import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout.component"

export default () => (
  <div>
    <Layout>
      <Link to="/blog">Blog</Link>
      <Link to="/tours">tours</Link>
      <Link to="/contact">contact</Link>
    </Layout>
  </div>
)
