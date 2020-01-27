import React from "react"
import Layout from "../components/Layout/Layout.component"
import styles from "../components/Error/Error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner/Banner.component"

export default () => {
  return (
    <Layout>
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
