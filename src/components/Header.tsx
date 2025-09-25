import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#clube', label: 'Clube VIP' },
    { href: '#galeria', label: 'Galeria' },
    { href: 'https://sites.appbarber.com.br/barberbeersportclub', label: 'Agendamento' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-amber-500 text-black py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(31) 99839-4531</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>Av dos Bandeirantes, 1266 - Mangabeiras, BH - MG</span>
            </div>
          </div>
          <div className="hidden md:block font-semibold">
            CLUBE VIP: 10% OFF em todos os serviços!
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'md-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
              <img src="/logo.png" alt="BarberBeer" className="h-20 w-auto" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-amber-500 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://sites.appbarber.com.br/barberbeersportclub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Agendar Agora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-white hover:text-amber-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://sites.appbarber.com.br/barberbeersportclub"
                onClick={() => setIsMenuOpen(false)}
                className="block bg-amber-500 hover:bg-amber-600 text-black px-3 py-2 rounded-full font-semibold text-center transition-colors duration-300 mt-4"
              >
                Agendar Agora
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;