import React from "react"
import Layout from "../components/Layout/Layout.component"
import styles from "../components/Error/Error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner/Banner.component"
import SEO from "../components/SEO/SEO"
export default () => {
  return (
    <Layout>
      <SEO title="Not found" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">
            Back to homepage
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
