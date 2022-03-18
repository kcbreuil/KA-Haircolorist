import React, { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState(null)
  const [isSubmitFormSuccessful, setIsSubmitFormSuccessful] = useState(false)

  const encode = data => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&")
  }

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => setIsSubmitFormSuccessful(true))
      .catch(error => error)
  }

  return (
    <div className="flex flex-col items-center	text-white">
      <h2 className="text-3xl uppercase border border-white rounded p-4 max-w-max mt-10">
        Contact Us
      </h2>
      {isSubmitFormSuccessful ? (
        <h3 className="my-10">We will get in touch with you soon!</h3>
      ) : (
        <form
          className="py-10 flex flex-col items-center"
          method="post"
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
          name="contact-form"
        >
          <label className="hidden" htmlFor="bot-field">
            <input name="bot-field" />
          </label>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            className="inline-block bg-black px-4 py-2 my-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white"
            required
          />
          <label className="" htmlFor="email">
            Email*
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="inline-block bg-black px-4 py-2 my-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white"
            onChange={handleChange}
            required
          />
          <label htmlFor="subject">Subject*</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="inline-block bg-black px-4 py-2 my-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white"
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message*</label>
          <textarea
            rows="5"
            id="message"
            name="message"
            className="inline-block bg-black px-4 py-2 my-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white"
            onChange={handleChange}
            required
          />
          <button
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-black hover:bg-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  )
}
