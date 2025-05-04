import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
            <p className="text-gray-300">
              Empresa líder em soluções inovadoras para seu negócio.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/produtos" className="text-gray-300 hover:text-white">Produtos</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-white">Serviços</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-white">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Tel: (85) 99965-5251</li>
              <li>Email: alzir@unifor.br</li>
              <li>Endereço: Av Desembargador Moreira, 123</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/alzir.falcao" target="_blank" className="text-gray-300 hover:text-white"><FaFacebook size={24} /></a>
              <a href="https://www.linkedin.com/in/jafal/" target="_blank" className="text-gray-300 hover:text-white"><FaLinkedin size={24} /></a>
              <a href="https://github.com/Jafal" target="_blank" className="text-gray-300 hover:text-white"><FaGithub size={24} /></a>
              <a href="https://www.instagram.com/jafal/" target="_blank" className="text-gray-300 hover:text-white"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} F&F Informática. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer