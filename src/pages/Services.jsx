import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Serviço 1',
      description: 'Descrição detalhada do serviço 1'
    },
    {
      id: 2,
      title: 'Serviço 2',
      description: 'Descrição detalhada do serviço 2'
    },
    {
      id: 3,
      title: 'Serviço 3',
      description: 'Descrição detalhada do serviço 3'
    },
    {
      id: 4,
      title: 'Serviço 4',
      description: 'Descrição detalhada do serviço 4'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Nossos Serviços</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <button className="btn btn-primary">Solicitar Orçamento</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services