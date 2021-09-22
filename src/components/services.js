import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Services() {
  return (
    <section id="services" className="my-20 px-10 text-center text-white">
      <StaticImage
        className="w-full mt-0"
        src="../images/testImage.jpg"
        alt="hair"
      />
      <h2 className="py-1">KA Haircolorists</h2>
      <p>text here</p>
    </section>
  )
}
