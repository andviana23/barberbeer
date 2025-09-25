import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock, Smartphone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com/barberbeer', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com/barberbeer', label: 'Facebook' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Clube VIP', href: '#clube' },
    { label: 'Agendamento', href: 'https://sites.appbarber.com.br/barberbeersportclub' },
    { label: 'Contato', href: '#contato' }
  ];

  const services = [
    'Corte + Barba',
    'Experiência Completa',
    'Pacote Noivo',
    'Clube VIP',
    'App Exclusivo'
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/logoFooter.png"
                alt="BarberBeer Logo"
                className="h-30 w-auto -mb-10 -mt-12"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A barbearia premium que combina tradição, estilo e a melhor experiência 
              cervejeira para o homem moderno.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 hover:bg-amber-500 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Belo Horizonte</p>
                  <p className="text-gray-300 text-sm">Av dos Bandeirantes, 1266 - Mangabeiras, BH - MG</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500" />
                <a 
                  href="tel:+5531998394531"
                  className="text-gray-300 hover:text-amber-500 transition-colors text-sm"
                >
                  (31) 99839-4531
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500" />
                <a 
                  href="mailto:contato@barberbeer.com.br"
                  className="text-gray-300 hover:text-amber-500 transition-colors text-sm"
                >
                  contato@barberbeer.com.br
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Segunda a Sexta: 09h às 20h</p>
                  <p className="text-gray-300 text-sm">Sábado: 08h às 17h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">Baixe nosso App</h3>
            <p className="text-gray-300 mb-6">Agendamentos, promoções e benefícios exclusivos na palma da sua mão</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://apps.apple.com/br/app/barber-beer/id1324267429"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors text-sm"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=br.com.starapp.barberbeer&hl=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors text-sm"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; 2025 BarberBeer. Todos os direitos reservados.</p>
              <p>CNPJ: 23.463.503/0001-07</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Strip */}
      <div className="bg-amber-500 text-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-2 sm:mb-0">
              <span className="font-bold">Pronto para a experiência BarberBeer?</span>
            </div>
            <a
              href="https://sites.appbarber.com.br/barberbeersportclub"
              className="bg-black text-amber-500 px-6 py-2 rounded-full font-bold hover:bg-gray-900 transition-colors"
            >
              Agendar Agora
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;