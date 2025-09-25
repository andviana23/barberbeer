import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    barber: '',
    date: '',
    time: ''
  });

  const services = [
    { id: 'corte-barba', name: 'Corte + Barba', price: 'R$ 65', duration: '60min' },
    { id: 'corte-social', name: 'Corte Social', price: 'R$ 45', duration: '45min' },
    { id: 'experiencia', name: 'Experiência Completa', price: 'R$ 95', duration: '90min' },
    { id: 'noivo', name: 'Pacote Noivo', price: 'R$ 150', duration: '120min' }
  ];

  const barbers = [
    { id: 'qualquer', name: 'Qualquer barbeiro disponível' },
    { id: 'joão', name: 'João - Especialista em Fade' },
    { id: 'pedro', name: 'Pedro - Master em Barbas' },
    { id: 'carlos', name: 'Carlos - Cortes Clássicos' }
  ];

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Agendamento:', formData);
    alert('Agendamento realizado com sucesso!');
  };

  return (
    <section id="agendamento" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-amber-500 font-semibold">AGENDAMENTO ONLINE</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agende Seu <span className="text-amber-500">Horário</span>
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Reserve seu horário de forma rápida e fácil. Escolha o serviço, 
            barbeiro e horário que melhor se adequa à sua agenda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Serviço Desejado
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                >
                  <option value="">Escolha um serviço</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name} - {service.price} ({service.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Barber Selection */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  Preferência de Barbeiro
                </label>
                <select
                  name="barber"
                  value={formData.barber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                >
                  <option value="">Escolha um barbeiro</option>
                  {barbers.map((barber) => (
                    <option key={barber.id} value={barber.id}>
                      {barber.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Data
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Horário
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-colors"
                  >
                    <option value="">Escolha um horário</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Confirmar Agendamento
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="space-y-8">
            {/* Quick Info */}
            <div className="bg-black rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Informações Importantes</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Confirmação Automática</p>
                    <p className="text-gray-400 text-sm">Você receberá a confirmação por WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Chegue 10 minutos antes</p>
                    <p className="text-gray-400 text-sm">Para uma experiência mais tranquila</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Cancelamento</p>
                    <p className="text-gray-400 text-sm">Até 2 horas antes do horário agendado</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Formas de Pagamento</p>
                    <p className="text-gray-400 text-sm">Dinheiro, Cartão, PIX ou Clube VIP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Precisa de Ajuda?</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-center transition-colors"
                >
                  WhatsApp: (11) 9999-9999
                </a>
                <a
                  href="tel:+5511999999999"
                  className="block w-full py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-semibold rounded-lg text-center transition-colors"
                >
                  Ligar: (11) 9999-9999
                </a>
              </div>
            </div>

            {/* VIP Club CTA */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-6 border border-amber-500/20">
              <h4 className="text-lg font-bold text-white mb-2">Seja VIP!</h4>
              <p className="text-gray-300 text-sm mb-4">
                Membros VIP têm agendamento prioritário e desconto de 30%
              </p>
              <a
                href="#clube"
                className="inline-block px-4 py-2 bg-amber-500 text-black font-semibold rounded-lg text-sm hover:bg-amber-600 transition-colors"
              >
                Conhecer Clube VIP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;