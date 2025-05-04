import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import feflogo from '../assets/images/logofef.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/sobre', label: 'Quem Somos' },
    { path: '/produtos', label: 'Produtos' },
    { path: '/servicos', label: 'Serviços' },
    { path: '/clientes', label: 'Clientes' },
    { path: '/contato', label: 'Contato' },
    { path: '/noticias', label: 'Notícias' },
    { path: '/parceiros', label: 'Parceiros' }
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">
            F&F Informática
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar