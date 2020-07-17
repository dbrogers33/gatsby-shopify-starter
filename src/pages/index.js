import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/full-page"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero background={data.hero.childImageSharp.fluid} />
    <div className="container mx-auto">
      <h1 className="font-sans text-6xl text-blue-800 text-center">Testing</h1>
    </div>
  </Layout>
)

export const query = graphql`
query {
  hero: file(relativePath: { eq: "hero/furniture.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1500, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
}
`

export default IndexPage
