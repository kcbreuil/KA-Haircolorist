import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const content = [
  {
    header: "Blonding Menu",
    items: [
      "Traditional highlights",
      "Baby lights",
      "Surfside lights",
      "Ombré",
      "Sun kissed lights",
      "Halo lights",
      "Money piece lights",
      "Platinum",
      "Dimensional blonde",
    ],
  },
  {
    header: "Color Menu",
    items: ["Single process ", "Double process", "Creative colors"],
  },
  {
    header: "Haircuts",
    items: ["Womens haircut", "Mens haircut ", "Kids haircut"],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="my-20 px-10 flex flex-col items-center text-center text-white h-screen"
    >

      <h2 className="uppercase border border-white rounded p-4 max-w-max my-10">
        Services
      </h2>
      <div className="w-full grid grid-cols gap-4 md:grid-cols-3 grow">
        {content.map(item => {
          const { header, items } = item
          return (
            <div className="grow">
              <h3 className="text-xl py-4">:: {header} ::</h3>
              {items.map(service => {
                return <p>{service}</p>
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}
