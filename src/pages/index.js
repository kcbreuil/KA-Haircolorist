import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services"
import Location from "../components/location"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      className="w-full mt-0"
      src="../images/testImage.jpg"
      alt="hair"
    />
    <Services />
    <Location />
  </Layout>
)

export default IndexPage
