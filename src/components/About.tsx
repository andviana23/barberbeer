import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Melhores notas do Google!',
      description: 'A melhor barberia da Região!'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Equipe Especializada',
      description: 'Barbeiros certificados com técnicas clássicas e modernas'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '10+ Anos de História',
      description: 'Tradição e experiência em cuidados masculinos de qualidade'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ambiente Seguro',
      description: 'Protocolos rigorosos de higiene e esterilização'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full mb-6">
              <span className="text-amber-500 font-semibold">NOSSA HISTÓRIA</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tradição e Inovação em <span className="text-amber-500">Perfeita Harmonia</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              A BarberBeer nasceu da paixão por transformar o cuidado masculino em uma experiência única. 
              Desde 2015, combinamos técnicas tradicionais de barbearia com um ambiente moderno e descontraído,
              inspirado no mundo dos esportes.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Aqui, cada cliente é tratado como VIP, desfrutando de atendimento premium,
              cerveja gelada e um espaço pensado para celebrar estilo, amizade e bons momentos. 
              Mais do que cortes de cabelo e barba, oferecemos uma experiência completa de cuidado e lifestyle masculino.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-black/40 rounded-lg">
                  <div className="text-amber-500 mb-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#clube"
              className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Conhecer Clube VIP
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;