import React from "react"

export default function Services() {

  const services = [
    {
      title: 'Hair',
      offerings: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Hair',
      offerings: 'Lorem ipsum dolor sit amet'
    },
  ]
  return (
    <section id="services" className="my-10 h-screen text-center text-white">
      <h2 className="py-1">Services</h2>
        {services.map((service) => {
          return (
            <div className="grid grid-cols-2">
              <h3>{service.title}</h3>
              <p>{service.offerings}</p>
            </div>
          )
        })}
    </section>
  )
}
