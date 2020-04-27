import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => { 
  console.log(data)
  return (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Markdown driven site demo</h1>
      <h4>{ data.allMarkdownRemark.totalCount }</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
         <div key={node.id}>
          <span>{ node.frontmatter.title } - {node.frontmatter.date }</span>
          <p>{ node.excerpt }</p>
         </div>
        ))
      }
    </div>
  </Layout>
)}
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          html
          excerpt
        }
      }
    }
  }
`