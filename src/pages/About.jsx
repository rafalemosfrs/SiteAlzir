import React from 'react'
import fotoalzir from '../assets/images/fotoalzir.jpg'
import feflogo from '../assets/images/logofef.jpg'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Quem Somos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nossa História</h2>
          <p className="text-gray-600 mb-4">
          Fundada em Fortaleza no início dos anos 1990, a F&F Informática nasceu do propósito de transformar a forma como empresas e instituições lidam com a tecnologia. Desde então, tem atuado como parceira confiável de organizações públicas e privadas, entregando planejamento, implantação e suporte de soluções tecnológicas robustas e atualizadas.
          </p>
          <p className="text-gray-600">
          Com uma abordagem consultiva e personalizada, a F&F acompanha de perto a evolução do mercado e as necessidades dos clientes. Nossa trajetória é marcada pelo foco na inovação, na capacitação contínua e na construção de relacionamentos sólidos e duradouros.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img 
            src={feflogo} 
            alt="Logo F&F Informática" 
            className="w-64 h-auto object-contain rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-primary mb-4">Missão</h3>
          <p className="text-gray-600">
          Oferecer soluções inovadoras e eficientes em Tecnologia da Informação, promovendo a transformação digital dos nossos clientes com ética, qualidade e compromisso com resultados.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-primary mb-4">Visão</h3>
          <p className="text-gray-600">
          Ser reconhecida como uma empresa referência em consultoria e serviços de TI no Brasil, destacando-se pela excelência técnica, inovação e atendimento personalizado.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-primary mb-4">Valores</h3>
          <p className="text-gray-600">
            Compromisso com o cliente, Ética e transparência, Inovação constante, Qualidade, Eficiência, Respeito às pessoas e Responsabilidade social e ambiental.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-200 rounded-lg flex items-center justify-center">
          <img 
            src={fotoalzir} 
            alt="Foto do CEO" 
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Nosso CEO</h2>
          <p className="text-gray-600 mb-4">
            <strong>José Alzir Bruno Falcão</strong> é um profissional altamente qualificado, com uma trajetória de 35 anos na área de Computação e Informática. Graduado em Administração de Empresas pela Universidade Estadual do Ceará, possui especializações em Informática, Redes de Computadores e Desenvolvimento de Sistemas com ênfase na Arquitetura Java. Além disso, é Mestre em Ciência da Computação Aplicada pela Universidade de Fortaleza e está atualmente no Doutorado em Informática Aplicada.
          </p>
          <p className="text-gray-600 mb-4">
            Ao longo de sua carreira, desempenhou papéis como Consultor, Gerente de TI, Engenheiro e Integrador de Sistemas, além de Analista de Sistemas de Informação. Com grande experiência na modelagem do conhecimento organizacional e engenharia de software, gerenciou e desenvolveu projetos de informatização para grandes empresas nos setores financeiro, comercial e industrial.
          </p>
          <p className="text-gray-600">
            Atualmente, José Alzir é CEO da <strong>F&F Computing</strong> e Consultor e Sócio-Gestor da <strong>F&F Consulting Associates</strong>. Seu compromisso é trabalhar com pesquisa e desenvolvimento para retribuir à sociedade suas descobertas, contribuindo com inovação e tecnologia para um futuro mais conectado e eficiente.
          </p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Principais Qualificações</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Diretor Executivo</li>
              <li>Coordenador do Curso de Sistemas de Informação da Faculdade Lourenço Filho</li>
              <li>Graduado em Administração de Empresas pela Universidade Estadual do Ceará - UECE</li>
              <li>Pós-Graduado em Informática e Redes de Computadores</li>
              <li>Mestre em Informática Aplicada pela Universidade de Fortaleza - Unifor</li>
              <li>EMC Brasil Certified Business Partner</li>
              <li>Certified Lotus Sales Specialist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
