import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services"
import Location from "../components/location"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
    <Location />
  </Layout>
)

export default IndexPage
