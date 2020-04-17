/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout"
import HeroLeft from "../components/hero/heroLeft"
import HeroRight from "../components/hero/heroRight"
import PostsList from "../components/layout/posts-list-layout"

const StyledPostSection = styled.section`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  display: flex;
  justify-content: center;
`

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <HeroLeft />
      <HeroRight />
      <StyledPostSection sx={{ my: 1 }}>
        <PostsList posts={posts} />
      </StyledPostSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          frontmatter {
            title
            date
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
