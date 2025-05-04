import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Services from './pages/Services'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import News from './pages/News'
import WhatsAppButton from './components/WhatsAppButton'
import Partners from './pages/Partners'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/parceiros" element={<Partners />} />

        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App