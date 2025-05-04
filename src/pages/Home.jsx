import React from 'react'
import { Link } from 'react-router-dom'
import { FaPaperPlane } from 'react-icons/fa'
import partners from '../data/partnersData'
import { services } from './Services' // reaproveitando os dados reais

const Home = () => {
  const topPartners = partners.slice(0, 3)
  const featuredServices = services.slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 rounded-xl text-white p-12 mb-12">
        <h1 className="text-5xl font-bold mb-6">Soluções Inovadoras para seu Negócio</h1>
        <p className="text-xl mb-8">Transformando ideias em resultados concretos</p>
        <Link
          to="/contato"
          className="btn btn-secondary inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
          aria-label="Solicite um orçamento"
        >
          <FaPaperPlane className="text-lg" />
          Solicite um Orçamento
        </Link>
      </section>

      {/* About Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">Sobre Nós</h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          A F&F Informática é uma empresa cearense com mais de 30 anos de experiência em soluções
          de Tecnologia da Informação e Gestão do Conhecimento. Atuando como consultoria e
          prestadora de serviços especializados, a F&F integra um ecossistema de inovação com apoio
          de parceiros estratégicos como IBM, Red Hat e Ingram Micro.
        </p>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl font-bold text-primary text-center mb-6">Nossos Parceiros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topPartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105"
            >
              <div className="h-24 w-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={partner.logo}
                  alt={`Logo do parceiro ${partner.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-primary">{partner.name}</h3>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to="/servicos"
                className="text-primary hover:text-primary/80"
                aria-label={`Saiba mais sobre ${service.title}`}
              >
                Saiba mais →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Pronto para transformar o seu negócio?
        </h2>
        <Link
          to="/contato"
          className="btn btn-primary inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <FaPaperPlane className="text-lg" />
          Fale com um Especialista
        </Link>
      </section>
    </div>
  )
}

export default Home
