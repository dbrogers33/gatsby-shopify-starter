import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero/small-hero"


const ProductsPage = ({ data }) => (
  <Layout>
    <Hero background={data.hero.childImageSharp.fluid} />
    <div className="container mx-auto">
      <h1 className="font-bold text-3xl">All Products</h1>
      <ul>
        {data.allShopifyProduct.edges.map(({ node }) => (
          <li key={node.shopifyId}>
            <h3>
              <Link to={`/product/${node.handle}/`} className="font-bold hover:underline hover:text-blue-700 text-blue-800">{node.title}</Link>
              {" - "}${node.priceRange.minVariantPrice.amount}
            </h3>
            <p>{node.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default ProductsPage

export const query = graphql`
  {
    allShopifyProduct(sort: { fields: [title] }) {
      edges {
        node {
          title
          shopifyId
          description
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
    hero: file(relativePath: { eq: "hero/furniture.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`