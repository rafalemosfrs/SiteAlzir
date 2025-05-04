import React from 'react'
import partners from '../data/partnersData'

const Partners = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Nossos Parceiros</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {partners.map((partner) => (
          <div key={partner.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="h-32 rounded-full mx-auto mb-4">
              <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-semibold text-primary mb-2">{partner.name}</h2>
            <p className="text-gray-600">{partner.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners
