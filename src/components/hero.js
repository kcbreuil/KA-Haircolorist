import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
  return (
    <section className="relative">
      <StaticImage
        className="w-full h-screen mt-0"
        src="../images/testImage.jpg"
        alt="hair"
      />
      <h1 className="absolute text-2xl lg:text-4xl text-black top-52 left-8">
        Cut | Color | Blonde Specialists
      </h1>
    </section>
  )
}
