import React from 'react'

const Products = () => {
  const products = [
    { id: 1, name: 'Produto 1', category: 'Categoria A' },
    { id: 2, name: 'Produto 2', category: 'Categoria B' },
    { id: 3, name: 'Produto 3', category: 'Categoria A' },
    { id: 4, name: 'Produto 4', category: 'Categoria C' },
    { id: 5, name: 'Produto 5', category: 'Categoria B' },
    { id: 6, name: 'Produto 6', category: 'Categoria C' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Nossos Produtos</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="btn btn-primary">Todos</button>
        <button className="btn btn-secondary">Categoria A</button>
        <button className="btn btn-secondary">Categoria B</button>
        <button className="btn btn-secondary">Categoria C</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.category}</p>
              <button className="btn btn-primary w-full">Saiba mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products