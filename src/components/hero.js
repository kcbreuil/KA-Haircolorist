import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
    return (
        <section className="relative flex justify-center items-end">
            <StaticImage
                className="w-full h-full"
                src="../images/image.jpg"
                alt="hair"
            />
            <div className="absolute opacity-60 text-white flex flex-col md:gap-4 py-2 md:py-10 mx-2 uppercase rounded">
                <h1 className='text-center text-4xl md:text-5xl'>Cut | Color | Blonde Specialists</h1>
            </div>
        </section>
    )
}
