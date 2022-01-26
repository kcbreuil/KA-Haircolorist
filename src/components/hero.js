import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
    return (
        <section className="relative">
            <StaticImage
                className="w-full h-full"
                src="../images/image.jpg"
                alt="hair"
            />
            <div className="absolute text-black top-1/2 left-8 flex flex-col gap-4 uppercase">
                <h1>Cut | Color | Blonde Specialists</h1>
                <button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0">Book now</button>
            </div>
        </section>
    )
}
