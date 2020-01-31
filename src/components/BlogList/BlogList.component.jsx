import React from "react"
import BlogCard from "../BlogCard/BlogCard.component"
import Title from "../Title/Title.component"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./blog.module.css"

const getAllPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          published(formatString: "dddd DD MM YYYY")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const BlogList = () => {
  const { posts } = useStaticQuery(getAllPosts)
  console.log(posts)
  return (
    <section className={styles.blogs}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </div>
    </section>
  )
}

export default BlogList
