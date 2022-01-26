import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
    return (
        <section className="relative md:flex justify-center items-end">
            <StaticImage
                className="w-full h-full"
                src="../images/image.jpg"
                alt="hair"
            />
            <div className="md:absolute text-white flex flex-col md:gap-4 py-2 md:py-10 mx-2 uppercase opacity-60 rounded">
                <h1 className='text-center md:text-5xl'>Cut | Color | Blonde Specialists</h1>
                <button className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white lg:mt-0">Book now</button>
            </div>
        </section>
    )
}
