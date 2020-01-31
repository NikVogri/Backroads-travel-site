import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.component"
import styles from "./single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Blog = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <h3>this is awesome image</h3>
            <img
              width="400"
              alt="post"
              src={node.data.target.fields.file["en-US"].url}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Mollitia, nulla?
            </p>
          </div>
        )
      },
      "embedded-entry-block": node => {
        const { slug, title, image, text } = node.data.target.fields
        return (
          <div className={styles.embedded}>
            <h1>{title["en-US"]}</h1>
            <img
              src={image["en-US"].fields.file["en-US"].url}
              alt="embedded post"
            />
            {documentToReactComponents(text["en-us"])}
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at: {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            All posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "dddd MMMM YYYY")
      text {
        json
      }
    }
  }
`
export default Blog