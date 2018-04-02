import React, { Component } from 'react'
const { data } = this. props

export default class PostPage extends Component {
  render () {
    return (
      <div>
        <h1>Post Page</h1>
        {/* <p>{data.excerpt}</p> */}
      </div>
    )
  }
}

// export const query = graphql`
//   query BlogPostQuery($slug: String!) {
//   	markdownRemark(fields: { slug: { eq: $slug } }) {
//       excerpt
//     }
//   }
// `
