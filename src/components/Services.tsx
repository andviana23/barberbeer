import React from 'react';
import { Scissors, Users, Coffee, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Corte + Barba',
      description: 'Corte personalizado + barba desenhada com produtos premium',
      price: 'R$ 135',
      duration: '60min',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Corte',
      description: 'Corte clássico para todas as ocasiões com acabamento profissional',
      price: 'R$ 75',
      duration: '40min',
      popular: false,
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Barba',
      description: 'Barba alinhada com técnica, estilo e cuidado de especialista.',
      price: 'R$ 60',
      duration: '30min',
      popular: false,
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Selagem',
      description: 'Tratamento premium para controlar volume e realçar seu visual.',
      price: 'R$ 119,90',
      duration: '120min',
      popular: false
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full mb-6">
            <span className="text-amber-500 font-semibold">NOSSOS SERVIÇOS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Serviços <span className="text-amber-500">Premium</span> para o Homem Moderno
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços pensados especialmente para você, 
            com técnicas modernas e produtos de alta qualidade.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 ${
                service.popular ? 'ring-2 ring-amber-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-amber-500">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-amber-500">{service.price}</span>
                    </div>
                    <div className="text-gray-400">
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>

                  <a
                    href="https://sites.appbarber.com.br/barberbeersportclub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300"
                  >
                    Agendar Agora
                  </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de algo personalizado?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco e criaremos um pacote especial para você.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold rounded-full transition-all duration-300"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;