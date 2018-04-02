import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({data}) => (
  <div>
    <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing post={node} key={node.id} />
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
    allMarkdownRemark {
    	edges {
    	  node {
    	    html
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
    	  }
    	}
    }
  }
`
