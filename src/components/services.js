import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Services() {
  return (
    <section id="services" className="my-20 px-10 flex flex-col items-center text-center text-white h-screen">
      {/* <StaticImage
        className="w-full mt-0"
        src="../images/testImage.jpg"
        alt="hair"
      /> */}
       <h2 className="uppercase border border-white rounded p-4 max-w-max my-10">
        Services
      </h2>
    </section>
  )
}
