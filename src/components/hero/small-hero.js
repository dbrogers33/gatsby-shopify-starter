import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image/withIEPolyfill"

const Hero = ({ background }) => (
    <div className="max-h-screen">
        <Img className="max-h-screen h-64"
            fluid={background}
            objectPosition='50% 50%'
        />
    </div>
)

export default Hero
