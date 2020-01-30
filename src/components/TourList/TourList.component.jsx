import React, { useState } from "react"
import styles from "./TourList.module.css"
import Tour from "../Tour/Tour.component"
import Title from "../Title/Title.component"

const TourList = ({ tours }) => {
  const [allTours] = useState(tours.edges)
  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {allTours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
    </section>
  )
}

export default TourList
