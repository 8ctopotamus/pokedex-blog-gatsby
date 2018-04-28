import React from 'react'
import Link from 'gatsby-link'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({data}) => (
  <div>
    <h1>This site is for demo purposes only.</h1>
    <p>None of the content, images, facts, etc are mine. This site is for practicing implementation of a blog with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a> and demo-ing <a href="https://www.netlify.com/" target="_blank">Netlify CMS</a> functionality.</p>
    <hr/>
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
