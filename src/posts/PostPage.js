import React, { Component } from 'react'

export default class PostPage extends Component {
  render () {
    const { data } = this.props
    if (!data) return null
    console.log(data)
    return (
      <div>
        <img src={data.markdownRemark.frontmatter.image} alt="test cover img"/>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html
        }}></div>
      </div>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
  	markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        image
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
