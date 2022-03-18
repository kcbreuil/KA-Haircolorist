import React from "react"
import ContactForm from "./contactForm"

export default function About() {
  return (
    <section
      id="about"
      className="my-20 px-10 flex flex-col items-center text-center text-white h-screen"
    >
      <h2 className="text-3xl uppercase border border-white rounded p-4 max-w-max my-10">
        About
      </h2>
      <p className="text-xl w-1/2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        condimentum nisi. Pellentesque bibendum quam a purus tincidunt lobortis
        et eu elit. Aliquam lacus purus, consequat id elementum eget, euismod in
        nisl. Donec a fringilla dui. Sed at lacus sodales, posuere nulla ut,
        placerat felis. Donec tincidunt viverra libero, et condimentum dui. In
        fringilla sapien euismod, fringilla metus eget, dictum nulla. Nunc sed
        enim nulla. Nam feugiat imperdiet mauris, eget tincidunt quam tristique
        ut. Etiam odio purus, elementum nec magna eu, malesuada fermentum est.
        Cras non nisl ac metus porttitor maximus. Mauris condimentum eu turpis
        sit amet porttitor. Fusce pretium lorem vel enim ultrices, sed aliquam
        augue sodales. Donec in orci purus. Ut ut sapien auctor, hendrerit quam
        vel, euismod felis. Duis at sollicitudin lectus. Maecenas in dapibus
        nisi, non ultricies arcu. Quisque volutpat tincidunt sagittis. Proin et
        mi vitae tellus porttitor lobortis non at ante. Nam et laoreet ligula,
        vitae pulvinar tortor.
      </p>
    </section>
  )
}
