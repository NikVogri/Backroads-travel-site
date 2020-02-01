import React from "react"
import Title from "../Title/Title.component"
import styles from "./About.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h1>Explore the difference</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            accusamus nobis consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            accusamus nobis consectetur?
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
