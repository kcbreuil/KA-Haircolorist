import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/services"
import Location from "../components/location"
import Hero from "../components/hero"
import About from "../components/about"
import { Link } from "gatsby"
import { FaArrowCircleLeft } from "react-icons/fa"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
    <StaticImage
        className="w-full mt-0"
        src="../images/image2.jpg"
        alt="hair"
      />
    <Location />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
