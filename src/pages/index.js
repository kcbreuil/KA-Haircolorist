import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services"
import Location from "../components/location"
import Hero from "../components/hero"
import { Link } from "gatsby"
import { FaArrowCircleLeft } from "react-icons/fa"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
    <Location />
    <Contact />
    <div className="flex place-content-center">
      <Link to="/">
        <FaArrowCircleLeft size={32} />
      </Link>
    </div>
  </Layout>
)

export default IndexPage
