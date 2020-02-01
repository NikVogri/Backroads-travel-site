import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.component"
import StyledHero from "../components/StyledHero/StyledHero.component"
import styles from "./template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/Day/Day.component"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO/SEO"
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
  return (
    <Layout>
      <SEO title={name} />
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((image, index) => (
              <Img
                fluid={image.fluid}
                key={index}
                alt="single tour"
                className={styles.image}
              />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>{description}</p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) => (
              <Day day={item.day} info={item.info} key={index} />
            ))}
          </div>
          <AniLink fade to="/tours" className="btn-primary">
            Back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}
const query = graphql`
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
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default Tour
