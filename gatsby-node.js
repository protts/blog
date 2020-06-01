const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWordpressCategory {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
      allWordpressTag {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            slug
            title
            date(formatString: "Y/MM/DD")
          }
        }
      }
    }
  `)

  if (result.errors) {
      console.error(result.errors)
      return Promise.reject(result.errors)
  }

  const catTemplate = path.resolve(`./src/templates/category.js`)
  result.data.allWordpressCategory.edges.forEach(edge => {
    createPage({
      path: `/category/${edge.node.slug}/`,
      component: slash(catTemplate),
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      },
    })
  })

  const tagTemplate = path.resolve(`./src/templates/tag.js`)
  result.data.allWordpressTag.edges.forEach(edge => {
    createPage({
      path: `/tag/${edge.node.slug}/`,
      component: slash(tagTemplate),
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      }
    })
  })

  const postsTemplate = path.resolve(`./src/templates/blog.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/blog/`,
      component: slash(postsTemplate),
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
      }
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  const posts = result.data.allWordpressPost.edges
  posts.forEach((edge, index) => {
    createPage({
      path: `/${edge.node.date}/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        slug: edge.node.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === (posts.length - 1) ? null : posts[index + 1].node
      }
    })
  })
}