import React from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8">Contato</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.name && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && <span className="text-red-500 text-sm">Email inválido</span>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: true })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phone && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Mensagem
              </label>
              <textarea
                id="message"
                {...register('message', { required: true })}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">Este campo é obrigatório</span>}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Informações de Contato</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📍</span>
                Av Desembargador Moreira, 123 - Fortaleza, Ceará
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">📞</span>
                (85) 99965-5251
              </p>
              <p className="flex items-center text-gray-600">
                <span className="mr-2">✉️</span>
                alzir@unifor.br
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Horário de Funcionamento</h2>
            <div className="space-y-2 text-gray-600">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          <a
            href="https://wa.me/5585999655251"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            <span className="mr-2">💬</span>
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact