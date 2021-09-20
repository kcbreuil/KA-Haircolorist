import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState(null);
    const [isSubmitFormSuccessful, setIsSubmitFormSuccessful] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    `${encodeURIComponent(key)}=${encodeURIComponent(
                        data[key],
                    )}`,
            )
            .join('&');
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...formData,
            }),
        })
            .then(() => setIsSubmitFormSuccessful(true))
            .catch((error) => error);
    };

    return (
        <div>
            <h2>Contact Us</h2>
            {isSubmitFormSuccessful ? (
                <h3>
                    We will get in touch with you soon!
                </h3>
            ) : (
                <form
                    className="flex flex-col"
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
                        required
                    />
                    <label htmlFor="email">Email*</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="subject">Subject*</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="message">Message*</label>
                    <textarea
                        rows="5"
                        id="message"
                        name="message"
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
}
