import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout.component"
import Hero from "../components/Hero/Hero.component"
import Banner from "../components/Banner/Banner.component"
import Services from "../components/services/Services.component"
import About from "../components/About/About.component"
// import styles from "../components/Layout.module.css"
export default () => (
  <Layout>
    <Hero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, architecto?"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </Hero>
    <About />
    <Services />
  </Layout>
)
