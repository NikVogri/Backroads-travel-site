import React from "react"
import Title from "../Title/Title.component"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formsubmit.co/darkpwnss@hotmail.com"
          method="POST"
        >
          <div>
            <label htmlFor="text">Full name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="john smith"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="john.smith@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="hello there"
              className={styles.formControl}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
