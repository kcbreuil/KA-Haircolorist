/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FaInstagram, FaFacebookSquare } from "react-icons/fa"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="flex flex-col min-h-screen bg-black">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer className="py-2 text-center text-white text-xs">
          <div className="flex justify-center gap-4 my-10">
            <FaInstagram size="30px" />
            <FaFacebookSquare size="30px" />
          </div>
          © {new Date().getFullYear()}, created with <span role="img">☕</span>{" "}
          by
          <a href="kaitlynbreuil.com"> Katie Breuil</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
