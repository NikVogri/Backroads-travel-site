import React from "react"
import styles from "./Hero.module.css"

const Hero = ({ children }) => {
  return <header className={styles.defaultHero}>{children}</header>
}

export default Hero
