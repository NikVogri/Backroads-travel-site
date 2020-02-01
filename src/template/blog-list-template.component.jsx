import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout.component"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BlogCard from "../components/BlogCard/BlogCard.component"
import styles from "../components/BlogList/blog.module.css"
import Title from "../components/Title/Title.component"

const BlogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props
  const nextPage = `/blogs/${currentPage + 1}`
  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="lastest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => (
            <BlogCard key={node.contentful_id} blog={node} />
          ))}
        </div>
        <section className={styles.links}>
          {currentPage >= 2 ? (
            <AniLink fade to={prevPage} className={styles.link}>
              Prev
            </AniLink>
          ) : null}
          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                fade
                to={`/blogs/${i === 0 ? "" : i + 1}`}
                key={i}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}
          {currentPage < 3 ? (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          ) : null}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          contentful_id
          published(formatString: "MMMM Do, YYYY")
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
export default BlogListTemplate
