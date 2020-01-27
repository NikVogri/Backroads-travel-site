import React from "react"
import Title from "../Title/Title.component"
import img from "../../images/defaultBcg.jpeg"
import styles from "./About.module.css"
const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
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
