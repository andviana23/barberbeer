import React from 'react';
import { Crown, Gift, Calendar, Star, Check } from 'lucide-react';

const Subscription = () => {
  const benefits = [
    'Produtos exclusivos de barbeiro para levar',
    'Acesso ao app BarberBeer com benefícios extras',
    'Sem taxa de cancelamento ou fidelidade'
  ];

  const plans = [
    {
      name: 'BarberBeer Elite - Corte',
      price: 199.90,
      period: '/mês',
      visits: 'Corte de cabelo ilimitado',
      savings: 'Cuide do seu visual o ano todo e economize muito com a assinatura ilimitada.',
      popular: false,
      features: ['Corte', '1 Cerveja Gratuita','Brindes anuais']
    },
    {
      name: 'BarberBeer Elite - Corte e Barba',
      price: 359.90,
      period: '/mês',
      visits: 'Corte e barba ilimitados',
      savings: 'Seu estilo sempre em dia, sem gastar além da conta: assinatura ilimitada BarberBeer.',
      popular: true,
      features: ['Corte', 'Barba', '1 Cerveja Gratuita','Brindes anuais']
    },
    {
      name: 'BarberBeer Elite - Barba',
      price: 259.90,
      period: '/mês',
      visits: 'Barba ilimitada',
      savings: 'Assinatura ilimitada: visual impecável e economia garantida.',
      popular: false,
      features: ['Barba', '1 Cerveja Gratuita','Brindes anuais']
    }
  ];

  return (
    <section id="clube" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full mb-6">
            <Crown className="w-4 h-4 mr-2" />
            <span className="text-amber-500 font-semibold">CLUBE VIP BARBERBEER</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Seja Membro <span className="text-amber-500">VIP</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tenha acesso a benefícios exclusivos, descontos especiais e uma experiência 
            premium que vai além do corte de cabelo.
          </p>

          <div className="flex items-center justify-center space-x-6 text-amber-500 mb-12">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Sem fidelidade</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift className="w-5 h-5" />
              <span>Brindes Anuais</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Agendamento VIP</span>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Benefícios Exclusivos para Membros
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'ring-2 ring-amber-500 transform scale-105' 
                  : 'border border-gray-800'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-amber-500 mb-2">
                  R$ {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-2">{plan.visits}</p>
                <p className="text-amber-500 text-sm font-semibold">{plan.savings}</p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-amber-500" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-amber-500 hover:bg-amber-600 text-black'
                    : 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black'
                }`}
              >
                Assinar {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-12 border border-amber-500/20">
          <Crown className="w-16 h-16 text-amber-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para se tornar VIP?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Entre para o Clube VIP BarberBeer e transforme seu cuidado em um verdadeiro ritual premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Quero ser VIP
            </a>
            <a
              href="#contato"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-full transition-all duration-300"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;