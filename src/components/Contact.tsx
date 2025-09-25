import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook,} from 'lucide-react';

const Contact = () => {
  const location = {
    name: 'BarberBeer Mangabeiras',
    address: 'Av dos Bandeirantes 1266 - Mangabeiras, BH - MG',
    phone: '(31) 99839-4531',
    hours: 'Seg à Sexta: 9h às 20h | Sábado: 08h às 17h'
  };

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, url: 'https://www.instagram.com/barbearia.barberbeer/', label: '@barbearia.barberbeer' },
    { icon: <Facebook className="w-6 h-6" />, url: 'https://www.facebook.com/barberbeersportclub/', label: 'barberbeersportclub' }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-amber-500 font-semibold">NOSSAS UNIDADES</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossa <span className="text-amber-500">Localização</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Localizada no coração de Belo Horizonte, nossa barbearia oferece 
            fácil acesso e a melhor experiência em cuidados masculinos.
          </p>
        </div>

        {/* Location */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-black rounded-2xl p-8 border border-amber-500 ring-1 ring-amber-500/20">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Location Info */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">{location.name}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{location.address}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-500" />
                    <a 
                      href={`tel:${location.phone.replace(/\D/g, '')}`}
                      className="text-gray-300 hover:text-amber-500 transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">{location.hours}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/55${location.phone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-center transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="https://sites.appbarber.com.br/barberbeersportclub"
                    className="block w-full py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold rounded-lg text-center transition-colors"
                  >
                    Agendar Online
                  </a>
                </div>
              </div>

              {/* Map with Embedded Google Maps */}
              <div>
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.324938136256!2d-43.92603132401396!3d-19.952832539021447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699b54ab9beb1%3A0x3a05e34161877e1d!2sBarber%20Beer%20Sport%20Club!5e0!3m2!1spt-BR!2sbr!4v1758834896804!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização BarberBeer Sport Club - Av dos Bandeirantes, 1266 - Mangabeiras, BH - MG"
                  ></iframe>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  <strong>Av dos Bandeirantes, 1266 - Mangabeiras, BH - MG</strong><br />
                  Localização privilegiada, com fácil acesso e estacionamento gratuito!
                </p>
                <a
                  href="https://maps.app.goo.gl/jqdngUxJzwt8HnRD7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Entre em Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">Central de Atendimento</p>
                  <a 
                    href="tel:+5531998394531" 
                    className="text-gray-300 hover:text-amber-500 transition-colors"
                  >
                    (31) 99839-4531
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">E-mail</p>
                  <a 
                    href="mailto:contato@barberbeer.com.br" 
                    className="text-gray-300 hover:text-amber-500 transition-colors"
                  >
                    contato@barberbeer.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">Horário de Funcionamento</p>
                  <p className="text-gray-300">Segunda a Sexta: 09h às 20h</p>
                  <p className="text-gray-300">Sábado: 08h às 17h</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Siga-nos nas Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 hover:bg-amber-500 text-white hover:text-black rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <h4 className="text-white font-semibold mb-4">Como Chegar</h4>
            <div className="aspect-video bg-gray-800 rounded-lg mb-4 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.324938136256!2d-43.92603132401396!3d-19.952832539021447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699b54ab9beb1%3A0x3a05e34161877e1d!2sBarber%20Beer%20Sport%20Club!5e0!3m2!1spt-BR!2sbr!4v1758834896804!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização BarberBeer Sport Club - Av dos Bandeirantes, 1266 - Mangabeiras, BH - MG"
              ></iframe>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              <strong>Av dos Bandeirantes, 1266 - Mangabeiras, BH - MG</strong><br />
              Estamos no coração de Belo Horizonte, com fácil acesso e estacionamento na região. 
              Um espaço exclusivo que une estilo, esporte, comunidade e a experiência única da BarberBeer.
            </p>
            <a
              href="https://maps.app.goo.gl/jqdngUxJzwt8HnRD7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Ver no Google Maps
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dúvidas? Estamos aqui para ajudar!
            </h3>
            <p className="text-gray-300 mb-6">
              Nossa equipe está sempre pronta para atendê-lo da melhor forma possível.
            </p>
            <a
              href="https://wa.me/5531998394531"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;