import React from 'react'

const Clients = () => {
  const sectors = [
    {
      title: 'Setor público',
      items: [
        'Secretarias estaduais e municipais de tecnologia',
        'Tribunais e instituições de controle',
        'Órgãos de desenvolvimento regional e inovação',
      ]
    },
    {
      title: 'Setor financeiro',
      items: [
        'Cooperativas de crédito',
        'Fintechs regionais',
        'Bancos de desenvolvimento',
      ]
    },
    {
      title: 'Educação e capacitação',
      items: [
        'Instituições de ensino técnico e superior',
        'Centros de pesquisa',
        'Escolas corporativas',
      ]
    },
    {
      title: 'Empresas privadas (TI, indústria, serviços)',
      items: [
        'Startups de tecnologia',
        'Empresas de serviços logísticos e industriais',
        'Fornecedores de infraestrutura e telecomunicações',
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Clientes Atendidos</h1>
      <p className="text-gray-700 text-lg mb-12">
        Atuamos com clientes de diversos segmentos, oferecendo soluções sob medida para diferentes contextos e necessidades.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sectors.map((sector, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-4">{sector.title}</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {sector.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients
