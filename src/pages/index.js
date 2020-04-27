import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const PostTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => { 
  console.log(data)
  return (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Markdown driven site demo</h1>
      <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>
      {
        data.allMarkdownRemark.edges.map(({node}) => (
         <div key={node.id}>
          <PostLink to={node.fields.slug}>
            <PostTitle>{ node.frontmatter.title } - {node.frontmatter.date }</PostTitle>
          </PostLink>
          <p>{ node.excerpt }</p>
         </div>
        ))
      }
    </div>
  </Layout>
)}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            date
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`