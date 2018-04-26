import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({data}) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}, i) => (
      <PostListing post={node} key={node.frontmatter.title} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
    	edges {
    	  node {
    	    html
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          fields {
            slug
          }
    	  }
    	}
    }
  }
`