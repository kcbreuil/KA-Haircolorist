// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import { FaArrowCircleLeft } from "react-icons/fa"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Contact from "../components/contact"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Hero />
    <Contact />
    <div className="flex place-content-center">
      <Link to="/">
        <FaArrowCircleLeft size={32} />
      </Link>
    </div>
  </Layout>
)

export default AboutPage
