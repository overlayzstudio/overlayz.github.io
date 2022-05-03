import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="main-box">
      <div className="logo-wrapper">
        <img src="/overlayz.svg" />
        <h1>Design studio, mostly focused on web3 </h1>
        <a href="http://twitter.com/realvjy" target="_blank">Contact Us</a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
