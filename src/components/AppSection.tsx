import React from 'react';
import { Smartphone, Download, Star, Gift, Bell, Calendar } from 'lucide-react';

const AppSection = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Agendamento Fácil',
      description: 'Agende seus horários direto pelo app, sem complicações'
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Benefícios Exclusivos',
      description: 'Promoções e descontos especiais só para usuários do app'
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Notificações Smart',
      description: 'Lembrete dos seus agendamentos e ofertas personalizadas'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Programa de Pontos',
      description: 'Acumule pontos a cada visita e troque por serviços Apenas para membros do clube VIP'
    }
  ];

  return (
    <section id="app" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full mb-6">
              <Smartphone className="w-4 h-4 mr-2" />
              <span className="text-amber-500 font-semibold">APP EXCLUSIVO</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Baixe o App da <span className="text-amber-500">BarberBeer</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Tenha a BarberBeer na palma da sua mão! Nosso aplicativo exclusivo 
              oferece uma experiência completa para você gerenciar seus agendamentos, 
              acompanhar benefícios e muito mais.
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-amber-500 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://apps.apple.com/br/app/barber-beer/id1324267429"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-colors border border-gray-700"
              >
                <div className="mr-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download na</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=br.com.starapp.barberbeer&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-colors border border-gray-700"
              >
                <div className="mr-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Baixar no</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-amber-500">4.8</div>
                <div className="text-gray-400 text-sm">Avaliação</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500">10K+</div>
                <div className="text-gray-400 text-sm">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-500">2K+</div>
                <div className="text-gray-400 text-sm">Agendamentos</div>
              </div>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="relative">
            <div className="flex items-center justify-center space-x-4">
              {/* Primeira imagem do app */}
              <div className="relative transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/agenda1.jpeg" 
                  alt="BarberBeer App - Tela Principal" 
                  className="w-64 h-auto rounded-3xl shadow-2xl border-4 border-gray-700"
                />
              </div>

              {/* Segunda imagem do app */}
              <div className="relative -ml-8 z-10 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/agenda2.jpeg" 
                  alt="BarberBeer App - Agendamento" 
                  className="w-64 h-auto rounded-3xl shadow-2xl border-4 border-gray-700"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-amber-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 left-8 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20">
            <Download className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Sua barbearia preferida no bolso!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Baixe agora o app BarberBeer e tenha acesso a agendamentos mais rápidos, 
              promoções exclusivas e muito mais. É grátis!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/br/app/barber-beer/id1324267429"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar para iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=br.com.starapp.barberbeer&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold rounded-full transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Baixar para Android
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;