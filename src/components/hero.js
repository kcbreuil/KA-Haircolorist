import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
    return (
        <section className="relative">
            <StaticImage
                className="w-full h-full bg-blend-overlay"
                src="../images/image.jpg"
                alt="hair"
            />
            <div className="absolute text-black top-10 md:left-8 flex flex-col gap-4 uppercase opacity-60 rounded ">
                <h1 className='text-center'>Cut | Color | Blonde Specialists</h1>
                <button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-black border border-black rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0">Book now</button>
            </div>
        </section>
    )
}
