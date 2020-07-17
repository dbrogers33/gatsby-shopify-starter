import React from "react"

import Layout from "../../components/layout"
import Hero from "../../components/hero/small-hero"

const ProductTemplate = ({ pageContext, data }) => {
  const { product } = pageContext
  return (
    <Layout>
      <Hero background={data.hero.childImageSharp.fluid} />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <h3 className="text-xl font-bold">${product.priceRange.minVariantPrice.amount}</h3>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
        {product.images.map(image => {
          return (
            <figure key={image.originalSrc}>
              <img
                src={image.originalSrc}
                alt={product.title}
                style={{
                  height: "auto",
                  width: "50%",
                }}
              />
            </figure>
          )
        })}
      </div>
        <div>{product.description}</div>
      </div>
    </Layout>
  )
}

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

export default ProductTemplate