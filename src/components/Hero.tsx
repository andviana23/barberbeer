import React from 'react';
import { Play, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: '5000+', label: 'Clientes Satisfeitos' },
    { icon: <Star className="w-8 h-8" />, number: '4.8', label: 'Avaliação Google' },
    { icon: <Award className="w-8 h-8" />, number: '10+', label: 'Anos de Experiência' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image/Video */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      ></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full mb-8">
            <span className="text-amber-500 font-semibold">BARBEARIA PREMIUM</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-white">EXPERIÊNCIA </span><br />
            <span className="text-amber-500">ÚNICA</span><br />
            <span className="text-white">BARBERBEER.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Corte premium, cerveja gelada e um ambiente exclusivo: a verdadeira experiência BarberBeer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://sites.appbarber.com.br/barberbeersportclub"
              className="inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Agendar Horário
            </a>
            <a
              href="#clube"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black font-bold rounded-full transition-all duration-300"
            >
              Conhecer Clube VIP
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-amber-500">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;