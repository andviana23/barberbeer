import React, { useState } from 'react';
import { Play, Instagram, Users, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cortes', label: 'Cortes' },
    { id: 'barbas', label: 'Barbas' },
    { id: 'ambiente', label: 'Ambiente' },
    { id: 'eventos', label: 'Eventos' }
  ];

  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'cortes',
      title: 'Corte Clássico Premium'
    },
    {
      type: 'video',
      src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ambiente',
      title: 'Experiência BarberBeer'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'barbas',
      title: 'Barba Desenhada'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'ambiente',
      title: 'Nosso Ambiente'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'cortes',
      title: 'Fade Moderno'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'eventos',
      title: 'Evento Clube VIP'
    }
  ];

  const filteredItems = selectedCategory === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-full mb-6">
            <Instagram className="w-4 h-4 mr-2" />
            <span className="text-amber-500 font-semibold">GALERIA & EXPERIÊNCIA</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Veja o <span className="text-amber-500">Lifestyle</span> BarberBeer
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Conheça nosso ambiente exclusivo, veja nossos trabalhos e descubra 
            por que somos referência em estilo masculino.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-black'
                    : 'bg-gray-900 text-white hover:bg-gray-800 border border-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square bg-gray-900 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                </div>
              </div>

              {/* Video Play Button */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-amber-500/90 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <Play className="w-6 h-6 text-black ml-1" fill="currentColor" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Proof Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800">
            <Instagram className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">25K+</h3>
            <p className="text-gray-300">Seguidores no Instagram</p>
            <a
              href="https://instagram.com/barberbeer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-amber-500 hover:text-amber-400 font-semibold"
            >
              @barberbeer
            </a>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800">
            <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">500+</h3>
            <p className="text-gray-300">Membros do Clube VIP</p>
            <a
              href="#clube"
              className="inline-block mt-4 text-amber-500 hover:text-amber-400 font-semibold"
            >
              Seja membro VIP
            </a>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800">
            <MapPin className="w-12 h-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Vila Madalena</h3>
            <p className="text-gray-300">Nossa localização premium</p>
            <a
              href="#contato"
              className="inline-block mt-4 text-amber-500 hover:text-amber-400 font-semibold"
            >
              Ver localização
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer aparecer na nossa galeria?
            </h3>
            <p className="text-gray-300 mb-6">
              Marque @barberbeer nas suas fotos e seja destaque no nosso Instagram!
            </p>
            <a
              href="https://instagram.com/barberbeer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;