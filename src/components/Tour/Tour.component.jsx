import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./Tour.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaMap } from "react-icons/fa"

const getDefaultImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Tour = ({ tour }) => {
  const {
    file: {
      childImageSharp: { fluid: placeholderImage },
    },
  } = useStaticQuery(getDefaultImage)

  const { name, price, country, days, slug, images } = tour

  let mainImage
  images ? (mainImage = images[0].fluid) : (mainImage = placeholderImage)
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade to={`/tours/${slug}`} className={styles.link}>
          DETAILS
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country || "country"}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Tour