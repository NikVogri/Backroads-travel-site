const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/template/tour-template.component.jsx"),
      context: {
        slug: node.slug,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      blogs: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/template/Blog-template.component.jsx"),
      context: {
        slug: node.slug,
      },
    })
  })
  // amount of posts
  const posts = data.blogs.edges
  // posts per page
  const postsPerPage = 5
  // calculate pages
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve(
        "./src/template/blog-list-template.component.jsx"
      ),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
