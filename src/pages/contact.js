import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/contactForm"

const Contact = () => (
  <Layout>
    <Seo title="Contact" />
    <h1>Contact</h1>
    <ContactForm />
    <Link to="/">Go back home</Link>
  </Layout>
)

export default Contact
